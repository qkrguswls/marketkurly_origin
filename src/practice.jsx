import React from 'react';
import Postcode from 'react-daum-postcode';
import {ViewProductContext} from './components/context/ViewProductContext';

export default function practice() {
    return (
        <div id="postCodeBox">
            <div id="form">
                <form>
                    <ul>
                        <li><h1>샛별배송 지역입니다.</h1></li>
                        <li><h2>매일 새벽, 문 앞까지 신선함을 전해드려요.</h2></li>
                        <li>
                            <div>{post.주소1}</div>
                            <button>재검색</button>
                        </li>
                        <li>
                            <input type="text" id='add2' name='add2' value={post.주소2} onChange={onChangeAddress2}/>
                        </li>
                        <li>
                            <p>저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다.</p>
                        </li>
                        li
                    </ul>
                </form>
            </div>
        </div>
    );
};