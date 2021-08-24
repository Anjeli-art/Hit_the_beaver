import React, {useEffect, useState} from 'react';
import s from "./Bober.module.css"
import bober from "./bober.png"
import heart from "./heart.png"

export const Bober = () => {

    let [data, setData] = useState(0)
    let count = data + 1

    let getCount = () => {
        if (data <= 99) {
            setData(count)

        } else if (data === 100 || data === 110) {
            setData(data = 1)
        }
    }

    let [marginTop, setmarginTop] = useState(10)
    let [marginLeft, setmarginLeft] = useState(40)

    let getMargin = () => {
        setmarginTop(Math.round(Math.random() * 400))
        setmarginLeft(Math.round(Math.random() * 1000));
    }


    useEffect(() => {

        if (data > 0 && data === 1) {
            const i = setInterval(getMargin, 2000);
            return () => {
                clearInterval(i)
            }
        } else if (data > 1 && data <= 10) {
            const i = setInterval(getMargin, 1900);
            return () => {
                clearInterval(i)
            }
        } else if (data > 10 && data <= 30) {
            const i = setInterval(getMargin, 1700);
            return () => {
                clearInterval(i)
            }
        } else if (data > 30 && data <= 50) {
            const i = setInterval(getMargin, 1200);
            return () => {
                clearInterval(i)
            }
        } else if (data > 50 && data <= 80) {
            const i = setInterval(getMargin, 1000);
            return () => {
                clearInterval(i)
            }
        } else if (data > 80 && data <= 99) {
            const i = setInterval(getMargin, 800);
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



    let [hearts, sethearts] = useState([heart, heart, heart, heart, heart])

    function removeHearts() {

        if (data > 0 && data < 100 && hearts.length !== 0) {
            return hearts.shift();
            let filterhearts = hearts.filter(el => el)
            sethearts(filterhearts)

        } else {
            data= 110
            setData(data)
            hearts.push(heart, heart, heart, heart, heart)
            if(hearts.length>5){
                hearts.length=5
            }
        }

    }

    return (
        <div>
            {data > 0 && data !== 110 && <div className={s.playbober}>
                <div className={s.score}>{data}</div>
                <div className={s.lifes}>
                    {hearts.map(el => {
                        return <div className={s.life}>
                            <img src={el}/>
                        </div>
                    })}
                </div>
            </div>}
            <div className={s.mouseblock} onClick={(e) => {
                if (e.target === e.currentTarget) {
                    removeHearts();
                    console.log(e.target)
                }
            }}>
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
                <h1>Бобер пойман!</h1>
                <p>
                    Чтобы начать игру заново нажми на бобра.
                </p>
            </div>}
            {data === 110 && <div className={s.error}>
                <h1>Бобер Не пойман!</h1>
                <p>Бобер оказался хитрее тебя!<br/>
                    Чтобы начать игру заново нажми на бобра.
                </p>
            </div>}
        </div>
    )

}


