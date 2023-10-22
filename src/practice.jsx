import React, { useEffect } from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';
import {ViewProductContext} from '';

export default function HeaderComponent() {

    const useLoc = useLocation();
    const {post, setPost} = React.useContext(ViewProductContext);
    const [state, setState] = React.useState({
        isSub1: false,
        isSub2: false,
        isFixed: false
    });
    
    const onClickAddres=(e)=>{
        e.preventDefault();
        setPost({
            ...post,
            isPostCode: true
        });
    }
    const refRow3Fixed = React.useRef();

    React.useEffect(()=>{
        const row3Top = refRow3Fixed.current.offsetTop;

        window.addEventListener('scroll', function(a,b) {
            let isFixed = false;
            if (window.scrollY >= row3Top) {
                isFixed = true;
            } else {
                isFixed = false;
            }
            setState({
                ...state,
                isFixed: isFixed
            });
        });
    },[]);

    const onMouseEnterNotice=()=>{
        setState({
            ...state,
            isSub1: true
        });
    }
    const onMouseLeaveNotice=()=>{
        setState({
            ...state,
            isSub1: false
        });
    }

    const onMouseEnterMap=()=>{
        setState({
            ...state,
            isSub2: true
        });
    }
    const onMouseLeaveMap=()=>{
        setState({
            ...state,
            isSub2: false
        });
    }

    return (
        <>
            <header id="header">
                <div className="row1">
                    <div className="container">
                        <div className="content">
                            <span><Link to="/signUp" className='on'>회원가입</Link></span>
                            <span><a href="!#">로그인</a></span>
                            <span onMouseEnter={onMouseEnterNotice}>
                                <a href="!#">
                                    고객센터
                                    {
                                        state.isSub1 && (
                                            <div className="sub" onMouseLeave={onMouseLeaveNotice}>
                                                <ul>
                                                    <li><a href="!#">공지사항</a></li>
                                                    <li><a href="!#">공지사항</a></li>
                                                    <li><a href="!#">공지사항</a></li>
                                                    <li><a href="!#">공지사항</a></li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`row2 ${state.isFixed ? 'on' : ''}`}>
                    <div className="container">
                        <div className="content">
                            <div className="left">
                                <span>
                                    <Link to="/main">마켓컬리</Link>
                                </span>
                                <span><a href="!#">뷰티컬리</a></span>
                            </div>
                            <div className="center">
                                <div>
                                    <input type="text" name='input_search' id='inputSearch' placeholder=''/>
                                    <a href="!#" className="search_btn"><img src="" alt="" /></a>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <a href="!#" onMouseEnter={onMouseEnterMap}><img src="" alt="" /></a>
                                    {
                                        state.isSub2 && (
                                            <div className="sub" onMouseLeave={onMouseLeaveMap}>
                                                <ul>
                                                    {
                                                        post.주소1 === '' ? (
                                                            <li>
                                                                <h2></h2>
                                                            </li>
                                                        )
                                                        :
                                                        (
                                                            <li>
                                                                {post.주소1} {post.주소2}
                                                            </li>
                                                        )
                                                    }
                                                    <li>
                                                        <button className="login">로그인</button>
                                                        <button className="addr-search" onClick={onClickAddress}>주소검색</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                                <div><a href="!#"><img src="" alt="" /></a></div>
                                <div><a href="!#"><img src="" alt="" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={refRow3Fixed} className={`row3 ${state.isFixed ? 'on' : ''}`}>
                    <div className="container">
                        <div className="content">
                            <div className="left">
                                <a href="!#">카테고리</a>
                            </div>
                            <div className="center">
                                <nav>
                                    <ul>
                                        <li className={useLoc.pathname === '/sub01' ? 'on' : ''}><Link to="/sub01">신상품</Link></li>
                                        <li className={useLoc.pathname === '/sub02' ? 'on' : ''}><Link to="/sub02">베스트</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="right">
                                <a href="!#">샛별 택배 배송안내</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    );
};