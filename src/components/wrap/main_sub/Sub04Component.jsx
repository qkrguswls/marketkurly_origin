import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './scss/main_sub4.scss';

export default function Sub04Component() {
    const [state, setState] = useState([]);

    useEffect(()=>{
        axios({
            url: './data/sub_04.json',
            method: 'GET'
        })
        .then((res)=>{
            if (res.status === 200) {
                setState(res.data.상품);
            }
        })
        .catch((err)=>{console.log(err);});
    },[]);

    // Click 방지
    const onClickPrevention=(e)=>{
        e.preventDefault();
    }
    return (
        <main id="mainSub04" className='mainSub4'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <ul>
                            {
                                state.map((item, idx)=>{
                                    return (
                                        <li key={item.번호}><a href="!#" onClick={onClickPrevention}><img src={`./img/sub_page/sub_04/${item.이미지}`} alt="" /></a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};
