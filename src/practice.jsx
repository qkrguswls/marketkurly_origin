import React, {useState, useEffect} from 'react';
import axios from 'axios';
import $ from 'jquery';
import {ViewProductContext} from '';

export default function Sub01Component() {

    const {setViewProductFn} = React.useContext(ViewProductContext);
    const [state, setState] = useState({
        상품: []
    });

    useEffect(()=>{
        axios({
            url: './data/sub_01.json',
            method: 'GET'
        })
        .then((res)=>{
            if (res.status === 200) {
                let 상품 = [];

                res.data.상품.map((item)=>{
                    상품 = [
                        ...상품,
                        {
                            번호: item.번호,
                            이미지: item.이미지,
                            상품이름: item.상품이름,
                            할인율: item.할인율,
                            정가: item.정가,
                            판매가: Math.round(item.정가 * (1-item.할인율)),
                            후기카운트: item.후기카운트
                        }
                    ]
                });
                setState({
                    상품: 상품,
                    total: 상품.length,
                    list: 6,
                    totPage: 상품.length/6,
                    isCurrent: false,
                    clickNum: 1,
                    cnt: 1
                });
            }
        })
        .catch((err)=>{console.log(err)});
    },[]);

    const [isCategoryBtn1, setIsCategoryBtn1] = useState(false);
    const [toggle1, setToggle1] = useState(false);

    useEffect(()=>{
        $('.category-btn1').on({
            click(e) {
                e.preventDefault();
                if (toggle1 === false) {
                    setToggle1(true);
                    $(this).next().stop().slideDown(200);
                } else {
                    setToggle1(false);
                    $(this).next().stop().slideUp(200);
                }
            }
        });
    },[toggle1]);

    const onClickOrder=(e, orderName)=>{
        e.preventDefault();
        if (orderName === '추천순') {
            setState({
                ...state,
                상품: state, 상품.sort((a,b)=>a.상품이름 < b.상품이름 ? (-1) : (a.상품이름 > b.상품이름 ? (1) : (0)))
            });
        } else if (orderName === '신상품순') {
            setState({
                ...state,
                상품: state.상품.sort((a,b)=>b.후기카운트 - a.후기카운트)
            });
        }
    }

    const onClcikPageBtn=(e, num)=>{
        e.preventDefault();
        setState({
            ...state,
            clickNum: num
        });
    }

    const onClickPrev=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt-1
        });
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt+1
        });
    }

    const onClickViewProduct=(e, item, imgPath)=>{
        e.preventDefault();
        setViewProductFn(item, imgPath);
    }

    return (
        <main id="mainSub01" className="mainSub">
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title hide"></div>
                        <div className="content">
                            <a href="!#"><img src="" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title"></div>
                        <div className="content">
                            <div className="left">
                                <div className="left-head">
                                    <h3>필터</h3>
                                    <span><img src="" alt="" />초기화</span>
                                </div>
                                <nav id="category">
                                    <ul>
                                        <li>
                                            <a href="!#" className={`category-btn1 ${isCategoryBtn1 ? 'on' : ''}`}>카테고리</a>
                                            <div className="sub sub1">
                                                <ul>
                                                    <li>
                                                        <label htmlFor="sub1Chk1">
                                                            <input type="checkbox" name='sub1_chk' id='sub1Chk1' value='수산'/>수산
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="sub1Chk2">
                                                            <input type="checkbox" name='sub1_chk' id='sub1Chk2' value='샐러드'/>샐러드
                                                        </label>
                                                    </li>
                                                </ul>
                                                <button>카테고리 더보기<img src="" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="!#" className={`category-btn1 ${isCategoryBtn2 ? 'on' : ''}`}>브랜드</a>
                                            <div className="sub sub2">
                                                <div className="row1">
                                                    <button className={isSub2Order ? 'on' : ''}>가나다순</button>
                                                    <button className={isSub2Order ? '' : 'on'}>상품 많은순</button>
                                                </div>
                                                <div className="row2">
                                                    <a href="!#">전체</a>
                                                    <a href="!#">ㄱ</a>
                                                    <a href="!#">ㄴ</a>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <label htmlFor="sub2Chk1">
                                                            <input type="checkbox" name='sub2_chk' id='sub2Chk1' value='낫포유'/>낫포유
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label htmlFor="sub2Chk2">
                                                            <input type="checkbox" name='sub2_chk' id='sub2Chk2' value='농부의 꽃'/>농부의 꽃
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="right">
                                <div className="right-head">
                                    <span>총 205건</span>
                                    <span>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '추천순')}>추천순</a>
                                        <a href="!#" onClick={(e)=>onClickOrder(e, '신상품순')}>신상품순</a>
                                    </span>
                                </div>
                                <div className="product">
                                    {
                                        state.상품.map((item, idx)=>{
                                            if (Math.ceil(idx+1) / state.list === state.clickNum) {
                                                return (
                                                    <li className="list">
                                                        <div className="list-gap" onClick={(e)=>onClickViewProduct(e, item, `./img/sub_page/sub_01/${item.이미지}`)}>
                                                            <div className="img-box">
                                                                <img src={`./img/sub_page/sub_01/${item.이미지}`} alt="" />
                                                            </div>
                                                            <div className="text-box">
                                                                <ul>
                                                                    <li>{item.상품이름}</li>
                                                                    <li>
                                                                        {
                                                                            item.할인율 > 0 ? (
                                                                                <>
                                                                                    <strong>{Math.round(item.할인율*100)}%</strong>
                                                                                    <span>{Number((item.정가*(1-item.할인율))).toLocaleString('ko=KR')}원</span>
                                                                                </>
                                                                            )
                                                                            :
                                                                            (
                                                                                `${Number(item.정가).toLocaleString('ko-KR')}원`
                                                                            )
                                                                        }
                                                                    </li>
                                                                    <li>

                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className="page-btn-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};