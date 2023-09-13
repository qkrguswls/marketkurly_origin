import React, {useState, useEffect} from 'react';
import Section2SlideWrapSlide from '';
import axios from 'axios';
import $ from 'jquery';

export default function Section2Component() {

    const [state, setState] = useState({
        상품: [],
        n: 0
    });

    useEffect(()=>{
        axios({
            url: './data/sec2_slide.json',
            method: 'GET'
        })
        .then((res)=>{
            if (res.status === 200) {
                setState({
                    ...state,
                    상품: res.data.상품,
                    n: res.data.상품.length
                });
                $('#section2 .slide-wrap').css({width: `${25 * state.n}%`});
            }
        })
        .catch((err)=>{console.log(err)});
    },[state.n]);

    useEffect(()=>{
        let cnt = 0;
        mainSlide();

        function mainSlide(){
            $('#section2 .slide-wrap').stop().animate({});
        }
    },[]);

    return (
        <section id="section2">
            <div className="contaner">
                <div className="title">
                    <h2>이 상품 어때요?</h2>
                </div>
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <Section2SlideWrapSlide 상품={state.상품}/>
                        </div>
                        <a href="!#" className='arrow-next-btn'><img src="" alt="" /></a>
                        <a href="!#" className='arrow-prev-btn'><img src="" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};