import React from 'react';
import {ViewProductContext} from '';

export default function Section9SlideWrapSlide({상품}) {
    const {setViewProductFn} = React.useContext(ViewProductContext);
    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        setViewProductFn(item, imgPath);
    }
    return (
        <ul className="slide-wrap">
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
                                        <li>{item.상품이름}</li>
                                        <li>
                                            {
                                                item.할인율 > 0 ? (
                                                    <>
                                                        <strong>{Math.round(item.할인율*100)}%</strong>
                                                        <span>{(item.정가*(1-item.할인율)).toLocaleString('ko-KR')}원</span>
                                                        <em>{item.정가.toLocaleString('ko-KR')}원</em>
                                                    </>
                                                )
                                                :
                                                (
                                                    `${item.정가.toLocaleString('ko-KR')}원`
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