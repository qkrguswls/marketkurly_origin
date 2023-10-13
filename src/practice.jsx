import React, {useState, useEffect} from 'react';
import {ViewProductContext} from '';

export default function Section4SlideWrapSlide({상품}) {

    const {setViewProductFn} = React.useContext(ViewProductContext);
    const [state, setState] = useState({
        H: 0,
        M: 0,
        S: 0
    });

    useEffect(()=>{
        let setId = setInterval(function(){
            let timeSale = '2023-07-28 09:00:00';
            let start = new Date(timeSale);
            start.setHours(state.getHours()+24);
            let now = new Date();
            let countTime = start - now;
            let h, m, s = 0;

            if (now >= start) {
                clearInterval(setId);
                h = 0;
                m = 0;
                s = 0;
            } else {
                h = Math.floor(countTime / (60*60*1000)) % 24;
                m = Math.floor(countTime / (60*1000)) % 60;
                s = Math.floor(countTime / (1000)) % 60;
            }
            setState({
                ...state,
                H: h < 10 ? `0${h}` : h,
                M: m < 10 ? `0${m}` : m,
                S: s < 10 ? `0${s}` : s
            });
        }, 1000);
    },[]);

    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        setViewProductFn(item, imgPath);
    }

    return (
        <ul className="slide-wrap">
            <li className="slide slide1">
                <ul>
                    <li><h2>일일특가</h2></li>
                    <li><h3>24시간 한정 특가</h3></li>
                    <li>
                        <div className="timer">
                            <img src="" alt="" />
                        </div>
                        <div className="timer-counter">
                            <span className="hours">{state.H}</span>
                            <span className="minutes">{state.M}</span>
                            <span className="seconds">{state.S}</span>
                        </div>
                    </li>
                    <li><p>망설이면 늦어요!</p></li>
                </ul>
            </li>
            {
                상품.map((item, idx)=>{
                    return (
                        <li className="slide" key={item.번호}>
                            <div className="slide-gap" onClick={(e)=>onClickViewProduct(e, item, `./img/intro/${item.이미지}`)}>
                                <div className="img-box">
                                    <img src={`./img/intro/${item.이미지}`} alt="" />
                                </div>
                                <div className="text-box">
                                    <ul>
                                        <li>{item.상품소개}</li>
                                        <li>{item.상품이름}</li>
                                        <li>
                                            {
                                                item.할인율 > 0 ? (
                                                    <>
                                                        <strong>{Math.round(item.할인율*100)}%</strong>
                                                        <span>{Math.round((item.정가*(1-item.할인율))).toLocaleString('ko-KR')}원</span>
                                                        <em>{item.정가.toLocaleString('ko-KR')}원</em>
                                                    </>
                                                )
                                                :
                                                (
                                                    `${item.정가.toLocaleString('ko-KR')}`
                                                )
                                            }
                                        </li>
                                        <li>
                                            <img src="" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
};