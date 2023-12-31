import React from 'react';

export default function FooterComponent() {
    // Click 방지
    const onClickPrevention=(e)=>{
        e.preventDefault();
    }
    return (
        <footer id='footer'  onClick={onClickPrevention}>
            <div className="row row1">
                <div className="container">
                    <div className="left">
                        <div className="top">
                            <h2>고객행복센터</h2>
                            <h3><a href='tel:1644-1107'>1644-1107</a><em>월~토요일 오전 7시 - 오후 6시</em></h3>
                        </div>
                        <div className="middle">
                            <ul>
                                <li>
                                    <div className="middle-left"><a href="!#">카카오톡 문의</a></div>
                                    <div className="middle-right">
                                        월~토요일 <i>|</i> 오전 7시 - 오후 6시<br/>
                                        일/공휴일 <i>|</i> 오전 7시 - 오후 1시
                                    </div>
                                </li>
                                <li>
                                    <div className="middle-left"><a href="!#">1:1 문의</a></div>
                                    <div className="middle-right">
                                        365일<br/>
                                        고객센터 운영시간에 순차적으로 답변드리겠습니다.
                                    </div>
                                </li>
                                <li>
                                    <div className="middle-left"><a href="!#">대량주문 문의</a></div>
                                    <div className="middle-right">
                                        월~금요일 <i>|</i> 오전 9시 - 오후 6시<br/>
                                        점심시간 <i>|</i> 낮 12시 - 오후 1시
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom">
                            <p>비회원 문의 : <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a></p>
                            <p>비회원 대량주문 문의 : <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a></p>
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <a href="!#">컬리소개</a>
                                <a href="!#">컬리소개영상</a>
                                <a href="!#">투자정보</a>
                                <a href="!#">인재채용</a>
                                <a href="!#">이용약관</a>
                                <a href="!#">개인정보처리방침</a>
                                <a href="!#">이용안내</a>
                            </li>
                            <li>
                                <div>
                                    법인명 (상호) : 주식회사 컬리 <i>|</i> 사업자등록번호 : 261-81-23567 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=" target='_blank'>사업자정보 확인</a><br/>
                                    통신판매업 : 제 2018-서울강남-01646 호 <i>|</i> 개인정보보호책임자 : 이원준<br/>
                                    <address>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <i>|</i> 대표이사 : 김슬아</address>
                                    입점문의 : <a href="https://accounts.google.com/v3/signin/identifier?dsh=S990164627%3A1684548622677923&continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ%2Fviewform%3Fusp%3Dsf_link&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ%2Fviewform%3Fusp%3Dsf_link&ifkv=Af_xneEx_qBpNPYzDZCazljG8SqBtws4IBHXMFfbrqoaHHiCzz9V0CmOVL2FudvBjTR9BCubY1id6Q&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target='_blank'>입점문의하기</a> <i>|</i> 제휴문의 : <a href="mailto:business@kurlycorp.com">business@kurlycorp.com</a><br/>
                                    채용문의 : <a href="mailto:recruit@kurlycorp.com">recruit@kurlycorp.com</a><br/>
                                    팩스: 070 - 7500 - 6098
                                </div>
                            </li>
                            <li>
                                <a href="!#"><img src="./img/footer/ico_instagram.png" alt="instagram" /></a>
                                <a href="!#"><img src="./img/footer/ico_fb.png" alt="fb" /></a>
                                <a href="!#"><img src="./img/footer/ico_blog.png" alt="blog" /></a>
                                <a href="!#"><img src="./img/footer/ico_naverpost.png" alt="naverpost" /></a>
                                <a href="!#"><img src="./img/footer/ico_youtube.png" alt="youtube" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row row2">
                <div className="container">
                    <a href="!#">
                        <span><img src="./img/footer/logo_isms.svg" alt="isms" /></span>
                        <span>
                            [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                            (심사받지 않은 물리적 인프라 제외)<br/>
                            [유효기간] 2022.01.19 ~ 2025.01.18
                        </span>
                    </a>
                    <a href="!#">
                        <span><img src="./img/footer/logo_privacy.svg" alt="privacy" /></span>
                        <span>
                            개인정보보호 우수 웹사이트 ·<br/>
                            개인정보처리시스템 인증 (ePRIVACY PLUS)
                        </span>
                    </a>
                    <a href="!#">
                        <span><img src="./img/footer/logo_tosspayments.svg" alt="tosspayments" /></span>
                        <span>
                            토스페이먼츠 구매안전(에스크로)<br/>
                            서비스를 이용하실 수 있습니다.
                        </span>
                    </a>
                    <a href="!#">
                        <span><img src="./img/footer/logo_wooriBank.svg" alt="wooriBank" /></span>
                        <span>
                            고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>
                            채무지급보증 계약을 체결하여 안전거래를 보장하고<br/>
                            있습니다.
                        </span>
                    </a>
                </div>
            </div>
            <div className="row row3">
                <div className="container">
                    <p>
                        컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
                        마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                    </p>
                    <strong>&copy; KURLY CORP. ALL RIGHTS RESERVED</strong>
                </div>
            </div>
        </footer>
    );
};
