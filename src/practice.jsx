import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ViewProductContext} from '';

export default function WrapComponent() {

    const [viewProduct, setViewProduct] = useState({
        viewProductKEY: '',
        최근본상품: {},
        isClick: false,
        isTime: false,
        최근본상품리스트: [],
        imgPath: ''
    });

    const {viewProductKEY, 최근본상품, isClick, isTime, 최근본상품리스트} = viewProduct;

    useEffect(()=>{
        if (localStorage.getItem(viewProductKEY) !== null) {
            setViewProduct({
                ...viewProduct,
                최근본상품리스트: JSON.parse(localStorage.getItem(viewProductKEY));
            });
        }
    },[]);

    useEffect(()=>{
        if (isClick === true) {
            setViewProduct({
                ...viewProduct,
                최근본상품: {
                    ...최근본상품,
                    이미지: viewProduct.imgPath,
                    time: new Date().getTime()
                },
                isClick: false,
                isTime: true
            });
        }
    },[최근본상품]);

    useEffect(()=>{
        let arr = [];

        if (isTime === true) {
            if (localStorage.getItem(viewProductKEY) !== null) {
                arr = JSON.parse(localStorage.getItem(viewProductKEY));
                arr = [
                    최근본상품,
                    ...arr
                ];
            } else {
                arr = [최근본상품];
            }
            localStorage.setItem(viewProductKEY, JSON.stringify(arr));

            setViewProduct({
                ...viewProduct,
                isTime: false,
                최근본상품리스트: arr
            });
        }
    },[최근본상품.time]);

    const setViewProductFn=(value, imgPath)=>{
        if (localStorage.getItem(viewProductKEY) !== null) {
            let result = JSON.parse(localStorage.getItem(viewProductKEY));
            const found = result.map((item)=>item.번호 === value.번호);

            if (found.includes(true) === false) {
                setViewProduct({
                    ...viewProduct,
                    최근본상품: value,
                    isClick: true,
                    imgPath: imgPath
                });
            }
        } else {
            setViewProduct({
                ...viewProduct,
                최근본상품: value,
                isClick: true,
                imgPath: imgPath
            });
        }
    }

    const [storageCookie] = useState({
        key: '',
        value: '',
        expires: 1
    });

    const {key, value, expires} = storageCookie;
    const [headerModal, setHeaderModal] = useState(true);

    const setHeaderModalClose=()=>{
        setHeaderModal(false);

        let today = new Date();
        today.setFullYear(today.getFullYeader()+expires);

        const val = {
            value: value,
            expires: today.getTime()
        }
        localStorage.setItem(key, JSON.stringify(val));
    }

    useEffect(()=>{
        if (localStorage.getItem(key) === null) {
            return;
        }
        const topModal = JSON.parse(localStorage.getItem(key));

        if (new Date() > new Date(topModal.expires)) {
            setHeaderModal(true);
        } else {
            setHeaderModal(false);
        }
    },[]);

    const [cookie] = useState({
        cookieName: '',
        cookieValue: '',
        cookieExpires: 3
    });

    const {cookieName, cookieValue} = cookie;
    const [introModal, setIntroModal] = useState(true);

    const introModalClose=()=>{
        setIntroModal(false);
    }
    const getCookie=()=>{
        if (document.cookie === '') {
            return;
        }
        let cookie = document.cookie.split(';');
        let arr = [];

        cookie.map((item, idx)=>{
            arr[idx] = {
                쿠키이름: item.split('=')[0].trim(),
                쿠키값: item.split('=')[1].trim()
            }
        });
        arr.map((item)=>{
            if (item.쿠키이름 === cookieName && item.쿠키값 === cookieValue) {
                setIntroModal(false);
            }
        })
    }

    useEffect(()=>{
        getCookie();
    },[introModal]);

    const [confirm, setConfirm] = useState({
        isConfirm: false,
        msg: '',
        type: 1,
        timerStart: false
    });

    const {msg, type, isConfirm, timerStart} = confirm;

    const confirmModalClose=()=>{
        if (msg.includes('인증번호') === true) {
            setConfirm({
                isConfirm: false,
                timerStart: true
            });
        } else {
            setConfirm({
                isConfirm: false
            });
        }
        document.querySelector('html').style.overflowY = 'auto';
    }
    
    const confirmModalOpen=(msg, type)=>{
        setConfirm({
            isConfirm: true,
            msg: msg,
            type: type
        });
        document.querySelector('html').style.overflow = 'hidden';
    }

    const [post, setPost] = useState({
        isPostCode: false,
        주소1: '',
        주소2: '',
        addressKey: ''
    });

    useEffect(()=>{
        let result = '';
        if (sessionStorage.getItem(post.addressKey) !== null) {
            result = JSON.parse(sessionStorage.getItem(post.addressKey));
            setPost({
                ...post,
                주소1: result.주소1,
                주소2: result.주소2
            });
        }
    },[]);

    return (
        <div id="wrap">
            <ViewProductContext.Provider value={{setViewProductFn, confirmModalClose, confirmModalOpen, msg, type, timerStart, post, setPost}}>
                {headerModal && <HeaderModalComponent setHeaderModalClose={setHeaderModalClose}/>}

                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path='/' element={<HeaderComponent/>}>
                            <Route index element={<MainComponent/>}/>
                            <Route path='/main' element={<MainComponent/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>

                <FooterComponent/>
                {introModal && <IntroModalComponent introModalClose={introModalClose} cookie={cookie}/>}
                <GoTopComponent/>
                <QuickMenuComponent 최근본상품리스트={최근본상품리스트}/>
                {isConfirm && <ConfirmComponent/>}
                {post.isPostCode && <PostCodeComponent/>}
            </ViewProductContext.Provider>
        </div>
    );
};