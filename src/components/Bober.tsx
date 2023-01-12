import React, {ChangeEvent, MouseEventHandler, MouseEvent, useEffect, useState} from 'react';
import s from "./Bober.module.css"
import bober from "./bober.png"
import heart from "./heart.png"
import back2 from "./back2.png"
import back3 from "./back3.png"
import back4 from "./back4.png"
import back5 from "./back5.png"

export const Bober = () => {

    let [data, setData] = useState(0)
    let [marginTop, setmarginTop] = useState(10)
    let [marginLeft, setmarginLeft] = useState(40)
    const [hearts, sethearts] = useState([heart, heart, heart, heart, heart])


    let getCount = () => {
        if (data < 100) {
            setData(data + 1)
        } else if (data === 100 || data === 110) {
            setData(data = 1)
            updateHearts()
        }
    }


    let getMargin = () => {
        setmarginTop(Math.round(Math.random() * 400))
        setmarginLeft(Math.round(Math.random() * 1000));
    }

    function updateHearts() {
        hearts.push(heart, heart, heart, heart, heart)
        if (hearts.length > 5) {
            hearts.length = 5
        }
    }

    function removeHearts() {

        if (data > 0 && data < 100 && hearts.length !== 0) {
            hearts.shift();
            let filterhearts = hearts.filter(el => el)
            sethearts(filterhearts)

        }
        if (hearts.length === 0 && data !== 100) {
            data = 110
            setData(data)
            updateHearts()
        }

    }

    function clickPast (e: MouseEvent<HTMLDivElement> | undefined) {
        if(e){
            if (e.target  === e.currentTarget  ) {
                removeHearts();
            }
        }
    }


    useEffect(() => {

        if (data > 0 && data === 1) {
            const i = setInterval(getMargin, 2500);
            return () => {
                clearInterval(i)
            }
        } else if (data > 1 && data <= 10) {
            const i = setInterval(getMargin, 2000);
            return () => {
                clearInterval(i)
            }
        } else if (data > 10 && data <= 30) {
            const i = setInterval(getMargin, 1700);
            return () => {
                clearInterval(i)
            }
        } else if (data > 30 && data <= 50) {
            const i = setInterval(getMargin, 1500);
            return () => {
                clearInterval(i)
            }
        } else if (data > 50 && data <= 80) {
            const i = setInterval(getMargin, 1200);
            return () => {
                clearInterval(i)
            }
        } else if (data > 80 && data <= 99) {
            const i = setInterval(getMargin, 1000);
            return () => {
                clearInterval(i)
            }
        }
        return

    })



    const boberstyle = {
        marginTop: marginTop,
        marginLeft: marginLeft,
        width: "100px",
    }
    const boberimg = {
        width: data < 1 ? "500px" : "100px",
    }
    const menu = {
        margin: "30px 0px 0px 150px",
        width: "1200px",
        height: "600px",
        backgroundColor: "#deff25",
        backgroundImage: (data < 30 && data >= 10 )? `url(${back3})` : (data < 50 && data >= 30 )? `url(${back4})` :( data < 80 && data >= 50 )? `url(${back2})` : (data < 100 && data >= 80 )? `url(${back5})` : "",
        padding: "20px",
        border: "#0c7116 solid 20px"
    }


    return (
        <div style={menu}>
            <div>
                {data > 0 && data !== 110 && data < 100 && <div className={s.playbober}>
                    <div className={s.score}>{data}</div>
                    <div className={s.lifes}>
                        {hearts.map(el => {
                            return <div className={s.life}>
                                <img src={el}/>
                            </div>
                        })}
                    </div>
                </div>}
                <div className={s.mouseblock} onClick={clickPast}>
                    <div style={boberstyle} onClick={() => {
                        getCount();
                        getMargin()
                    }}>
                        <img style={boberimg}
                             src={bober}/>
                    </div>
                </div>
                {data === 0 && <div className={s.znakomstvo}>
                    <h1>Поймай говнястого бобра</h1>
                    <p>Это игра на внимательность.<br/>
                        С каждым уровнем бобер двигается все быстрее.<br/>
                        Тебе дается 5 жизней чтоб обыграть бобра.<br/>
                        Если они сгорят,игра начнется заново.<br/>
                        Чтобы начать игру нажми на бобра.
                    </p>
                </div>}

                {data < 11 && data > 9 && <div className={s.layer}>2 уровень</div>}
                {data < 31 && data > 29 && <div className={s.layer}>3 уровень</div>}
                {data < 51 && data > 49 && <div className={s.layer}>4 уровень</div>}
                {data < 81 && data > 79 && <div className={s.layer}>5 уровень</div>}
                {data > 99 && data < 110 && <div className={s.znakomstvo}>
                    <h1>Бобер пойман {data} раз</h1>
                    <div>
                        <p>
                            Игра закончена.Количество жизней {hearts.length}
                        </p>
                        <p>
                            Чтобы начать игру заново нажми на бобра.
                        </p>
                    </div>
                </div>}
                {data === 110 && <div className={s.error}>
                    <h1>Бобер Не пойман!</h1>
                    <p>Бобер оказался хитрее тебя!<br/>
                        Чтобы начать игру заново нажми на бобра.
                    </p>
                </div>}
            </div>
        </div>
    )

}


