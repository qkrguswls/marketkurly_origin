import React,{useState, useEffect, useRef} from 'react';
import quickMenuHeaderImage from './images/deliveryInfo.png';
import iconArrow from './images/arrow_up.svg';
import './scss/quick_menu.scss';
import $ from 'jquery';

export default function QuickMenuComponent({최근본상품리스트}) {
    // Scroll Event
    const [quickMenu, setQuickMenu] = useState(false);
    const [list, setList] = useState(false);
    const refQuickMenu = useRef();

    useEffect(()=>{
        최근본상품리스트.length > 0 ? setList(true) : setList(false);
    },[최근본상품리스트]);

    useEffect(()=>{
        window.addEventListener('scroll', function(){
            let quickMenu = false;

            if (window.scrollY >= 465) {
                quickMenu = true;
            } else {
                quickMenu = false;
            }
            setQuickMenu(quickMenu);
        });
        $('#quickMenu .on').css({marginTop: $('#quickMenu').innerHeight()/2});
    },[]);

    // Click Event
    const viewProductBox = useRef();
    const [cnt, setCnt] = useState(0);
    const [isClick, setIsClick] = useState(false);

    const onClickViewProduct=(e, value)=>{
        e.preventDefault();
        setIsClick(true);

        if (value === 'up') {
            setCnt(cnt >= 최근본상품리스트.length-3 ? 최근본상품리스트.length-3 : cnt+1);
        } else {
            setCnt(cnt <= 0 ? 0 : cnt-1);
        }
    }

    useEffect(()=>{
        if (isClick === true) {
            viewProductBox.current.style.top = `${-79 * cnt}px`;
            setIsClick(false);
        }
    },[isClick]);

    // Click 방지
    const onClickPrevention=(e)=>{
        e.preventDefault();
    }
    return (
        <div ref={refQuickMenu} id="quickMenu" className={quickMenu ? 'on' : ''} onClick={onClickPrevention}>
            <ul>
                <li>
                    <div>
                        <a href="!#"><img src={quickMenuHeaderImage} alt="" /></a>
                    </div>
                </li>
                <li><div></div></li>
                <li>
                    <div>
                        <span><a href="!#">등급별 혜택</a></span>
                        <span><a href="!#">레시피</a></span>
                    </div>
                </li>
                <li><div></div></li>
                <li>
                    {
                        list && (
                            <div>
                                <div className="view-top">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, 'down')}><img src={iconArrow} alt="" /></a>
                                </div>
                                <h2>최근 본 상품</h2>
                                <div className='view-box'>
                                    <ul ref={viewProductBox}>
                                        {
                                            최근본상품리스트.map((item, idx)=>{
                                                return (
                                                    <li key={item.번호}><a href="!#"><img src={item.이미지} alt="" /></a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="view-bottom">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, 'up')}><img src={iconArrow} alt="" /></a>
                                </div>
                            </div>
                        )
                    }
                </li>
            </ul>
        </div>
    );
};