// tootip
$('[data-toggle="tooltip"]').tooltip();


// go home
$(".logoImage").on("click", function() {
    location.reload();
});

//메뉴 이동
$('.goLink').on('click', function(){
    $('html, body').stop().animate({scrollTop:$($(this).attr('href')).offset().top-50});
});

// up
$('#goToTop').on('click', function() {
    $('html, body').stop().animate({
        scrollTop : '0'
    });
});

//nav
//header scroll option
var topMenuOffset = $('.menuScrollOption').offset();
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
        $('.menuScrollOption').addClass('menuPosition-fixed');
    } else {
        $('.menuScrollOption').removeClass('menuPosition-fixed');
    }
});

//changing background per time
if(new Date().getHours()%2===0){
    $('.header').css('background', 'radial-gradient(ellipse at bottom, #12436f 0%, #000 100%)');
    $('.member').css('background', 'radial-gradient(ellipse at bottom, #414040 0%, #161616 100%)');
}else{
    $('.header').css('background', 'radial-gradient(ellipse at bottom, #414040 0%, #161616 100%)');
    $('.member').css('background', 'radial-gradient(ellipse at bottom, #12436f 0%, #000 100%)');
}

// window.innerWidth < 530 ? $('.socialEmo:nth-child(1)').before("<br>") : ;

//copy
const mail='psw@byulsoft.com'; /* data: 연락받을 메일 */
const copy = $('#copy').val(mail);
$('.copy').click(function(){
    copy.select();
    document.execCommand("copy");
    $(this).fadeIn();
});

/*
* 가변 데이터
* */
// carousel data //문제없으나 반응형 효과 충돌나서 안 씀(삭제)
//skill data
const skills = [
    {
        'skillImage': 'images/web.png', /* data: skills 이미지 */
        'skillText': '웹/모바일<br>어플 개발' /* data: skills 문구 */
    },
    {
        'skillImage': 'images/chart.png',
        'skillText': '통계 및<br>자산관리'
    },
    {
        'skillImage': 'images/list.png',
        'skillText': '일정관리'
    },
    {
        'skillImage': 'images/rm.png',
        'skillText': '수익관리'
    },
    {
        'skillImage': 'images/chat.png',
        'skillText': '채팅 및<br>메신저앱'
    },
    {
        'skillImage': 'images/admin.png',
        'skillText': '관리자<br>페이지'
    },
    {
        'skillImage': 'images/db.png',
        'skillText': 'DB구축<br>및 관리'
    },
    {
        'skillImage': 'images/privacy.png',
        'skillText': '정보보호/<br>보안'
    },
    {
        'skillImage': 'images/ticket.png',
        'skillText': '예약 결제<br>시스템'
    },
];
skills.forEach(val => {
    $('.uk-slider-items').append(
        "<li>" +
        "<img src='" + val.skillImage + "'alt=''>" +
        "<div class='uk-position-center uk-panel'>" +
        "<h3 class='text-light text-center m-2 pt-2 pb-2 pl-3 pr-3 font-weight-bold'>" + val.skillText + "</h3>" +
        "</div>" +
        "</li>"
    );
});

//about data
const abouts = [
    {
        'aboutImage': 'images/idea.png', /* data: abouts 이미지 */
        'aboutTitle': '검증된 MSA 전문기업', /* data: abouts 제목 */
        'aboutText': 'Java, Spring, Spring Cloud, Kafka, VueJS 등 최신 오픈소스 기술을 이용하여 짧은 기간에 고품질의 웹 서비스를 제공합니다' /* data: abouts 내용 */
    },
    {
        'aboutImage': 'images/team.png',
        'aboutTitle': '풍부한 경력의 전문가',
        'aboutText': '평균 7년이 넘는 경력으로 홈페이지, CRM, CMS 등 다양한 웹 기반서비스 개발경력을 가진 전문가로 구성되어 있습니다'
    },
    {
        'aboutImage': 'images/handshake.png',
        'aboutTitle': '높은 고객 만족도',
        'aboutText': '에자일 개발 방법론 도입으로 고객과 함께 고민하고 만들며 고객의 요구사항에 맞게끔 반복 수정해서 최상의 결과물을 만들어냅니다'
    },
];
abouts.forEach(val => {
    $('.aboutData').append(
        "<div class='col-lg-4 col-md-8 col-sm-12 col-xs-12 mx-auto my'>" +
            "<div class='card mb-4' style='width: 100%;'>" +
                "<h1 class='m-2 text-center'><img src='" + val.aboutImage + "' class='card-img-top' alt=''></h1>" +
                    "<div class='card-body mb-2'>" +
                        "<h4 class='card-title font-weight-bold'>" + val.aboutTitle + "</h4>" +
                            "<p class='card-text'>" + val.aboutText + "</p>" +
                    "</div>" +
            "</div>" +
        "</div>"
    );
});

//member data
const members = [
    {
        'memberImage': 'images/member/janghs.jpg', /* data: members 이미지 */
        'memberName': '장현석' /* data: members 이름 */
    },
    {
        'memberImage': 'images/member/javain82.jpg',
        'memberName': '김연아'
    },
    {
        'memberImage': 'images/member/ksjang.jpg',
        'memberName': '장경순'
    },
    {
        'memberImage': 'images/member/jshyun9.jpg',
        'memberName': '진성현'
    },
    {
        'memberImage': 'images/member/tshan.jpg',
        'memberName': '한태식'
    },
    {
        'memberImage': 'images/member/realbbeng.jpg',
        'memberName': '이병준'
    },
    {
        'memberImage': 'images/member/jyebe9034.jpg',
        'memberName': '임지혜'
    },
    {
        'memberImage': 'images/member/ksh9891.jpg',
        'memberName': '김상현'
    },
    {
        'memberImage': 'images/member/nmji101.jpg',
        'memberName': '윤혜영'
    },
    {
        'memberImage': 'images/member/doli061214.jpg',
        'memberName': '정수민'
    },
    {
        'memberImage': 'images/member/jongmin4943.jpg',
        'memberName': '윤종민'
    },
    {
        'memberImage': 'images/member/friendship.jpg',
        'memberName': '양우정'
    },
];
members.forEach(val => {
    $('.memberData').append(
        "<div class='col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 my'>" +
            "<div class='card text-light m-auto position-relative' style='width:100%; height:200px;'>" +
                " <div class='row no-gutters p-2'>" +
                    "<div class='position-absolute' style='top:5px; left:8%;'>" +
                        "<img src='" + val.memberImage + "' class='card-img' alt=''>" +
                    "</div>" +
                    "<div class='card-body text-center position-absolute' style='top:30%; right:5%;'>" +
                        "<h5 class='font-weight-bold text-light text-shadow-bold'>" + val.memberName + "<br>Manager</h5>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>"
    );
});

//timeline data
const timelines=[
    {
        'timelineImage': 'images/timeline/rms.jpg', /* data: timelines 이미지 */
        'timelineTitle': '소노호텔앤리조트 RMS 구축,  Naver, 인터파크등 API 연동', /* data: timelines 제목 */
        'timelineText':  /* data: timelines 내용 */
            '<li>기존 BAR요금 체계의 단점을 극복한 리조트 특화 레벨 요금변경 시스템 구축</li>' +
            '<li>Naver, 인터파크 등 실시간 예약 및 상품관리, 재고관리 API 연동 구축</li>' +
            '<li>BI 수준의 특화 통계 페이지와 경영일보, 실시간 30분단위 통계 시스템 구축</li>' +
            '<li>MSA 방식으로 적은 서버 댓수로 대용량 처리 시스템 구축</li>',
        'timelineYear': '2020' /* data: timelines 연도 */
    },
    {
        'timelineImage': 'images/timeline/tll.jpg', /* data: timelines 이미지 */
        'timelineTitle': '대명리조트 TLL 연동, 시즌락카 리뉴얼', /* data: timelines 제목 */
        'timelineText':  /* data: timelines 내용 */
            '<li>TL-Lincoln과 웹서비스로 통신하는 중계 모듈 서버 구축</li>' +
            '<li>MSA와 Docker Swarm 을 이용한 서비스 구축 및 각 모듈 분리</li>' +
            '<li>시즌락카 1차 리뉴얼 MSA 방식으로 동시접속자 3천명 최대 응답시간 3초내 처리</li>',
        'timelineYear': '2019' /* data: timelines 연도 */
    },
    {
        'timelineImage': 'images/timeline/phoenix.jpg', /* data: timelines 이미지 */
        'timelineTitle': '휘닉스파크', /* data: timelines 제목 */
        'timelineText':  /* data: timelines 내용 */
            '<li>휘닉스 파크 홈페이지 및 관리자 리뉴얼</li>',
        'timelineYear': '2018' /* data: timelines 연도 */
    },
    {
        'timelineImage': 'images/timeline/cmc.jpg',
        'timelineTitle': 'CMC, 쥬비스 CRM 대시보드, ERP',
        'timelineText':
            '<li>CMC 성모병원 7개 사이트와 관리자 통합 구축</li>' +
            '<li>VueJS 기술(Front)과 AngularJS(관리자) 사용</li>' +
            '<li>쥬비스 고객 관리 현황을 각종 지표로 볼 수 있는 대시보드 구축</li>' +
            '<li>쥬비스 ERP 시스템 리뉴얼</li>',
        'timelineYear': '2017'
    },
    {
        'timelineImage': 'images/timeline/juvis.jpg',
        'timelineTitle': '다이어트 전문기업 쥬비스에서 예약현황판 및 CRM 개발',
        'timelineText':
            '<li>웹소켓을 이용한 실시간 고객응대 시스템 및 해당 관리자 개발</li>' +
            '<li>대명 다국어 사이트 예약 및 대명 메인 페이지 리뉴얼</li>' +
            '<li>대명 쏠비치, 델피노 리뉴얼</li>' +
            '<li>더샘 쇼핑몰 관리자 및 사용자 리뉴얼</li>',
        'timelineYear': '2016'
    },
    {
        'timelineImage': 'images/timeline/dm-bw.jpg',
        'timelineTitle': '대명 본 웨딩 및 CRM 개발',
        'timelineText':
            '<li>총 7개월에 걸쳐 개발</li>' +
            '<li>bootstrap 기반 템플릿 이용</li>' +
            '<li>AngularJS를 이용한 관리자 개발</li>' +
            '<li>다양한 요구 조건을 만족시키는 관리자와 홈페이지 개발</li>',
        'timelineYear': '2015'
    },
    {
        'timelineImage': 'images/timeline/dm-cs.jpg',
        'timelineTitle': '대명 CS Portal 개발',
        'timelineText':
            '<li>총 5개월에 걸쳐 개발</li>' +
            '<li>AngularJS를 사용해 관리자, 프론트 전체 구현</li>' +
            '<li>highchart 와 D3 chart 등 다양한 챠트 구성</li>' +
            '<li>엑셀 업로드에 의한 데이터 반영 등</li>',
        'timelineYear': '2015'
    },
    {
        'timelineImage': 'images/timeline/vivaldi.jpg',
        'timelineTitle': '비발디파크 등 홈이지 개발',
        'timelineText':
            '<li>총 6개월에 걸쳐 개발</li>' +
            '<li>비발디파크, 소노펠리체, 대명회원권분양, 대명그룹 관리자와 홈페이지 개발</li>',
        'timelineYear': '2014'
    },
    {
        'timelineImage': 'images/timeline/amc.jpg',
        'timelineTitle': '서울아산병원 홈페이지 개발',
        'timelineText':
            '<li>총 11개월에 걸쳐 개발</li>' +
            '<li>jQuery, Bootstrap 기반 개발(관리자)</li>' +
            '<li>자동 홈페이지 생성 툴 개발(홈빌더)</li>' +
            '<li>동적 이벤트 생성 및 관리 프로그램, 이미지 관리, 권한별 다운로드 제한 기능 개발(학술관리)</li>',
        'timelineYear': '2014'
    },
    {
        'timelineImage': 'images/timeline/dm-golf.jpg',
        'timelineTitle': '대명 골프클럽 시스템 개발',
        'timelineText':
            '<li>총 6개월에 걸쳐 개발</li>' +
            '<li>예약 시스템, 회원가입, 여러개의 브랜드 사이트 등 개발</li>',
        'timelineYear': '2013'
    },
];
timelines.forEach(val => {
    $('.timelineData').append(
        "<!-- Article -->" +
        "<div class='timeline-article'>" +
            "<div class='content-left-container'>" +
                "<div class='content-left'>" +
                    "<p>" +
                        "<img class='m-1' src='" + val.timelineImage + "' width='100%'>" +
                    "</p>" +
                "</div>" +
            "</div>" +
            "<div class='content-right-container'>" +
                "<div class='content-right'>" +
                    "<p>" +
                        "<h5 class='text-info'>" + val.timelineTitle + "</h5>" +
                            val.timelineText +
                    "</p>" +
                "</div>" +
            "</div>" +
            "<div class='meta-date'>" +
            "<span class='date'>" + val.timelineYear + "</span>" +
            "</div>" +
        "</div>"
    );
});

//licence data
const licences = [
    {
        'licenceTitle': 'Slide Images',
        'licenceText':
        '<li><a href="https://www.freepik.com/free-photos-vectors/icon">Icon vector created by fullvector - www.freepik.com</a></li>'
    },
    {
        'licenceTitle': 'Icons',
        'licenceText':
        '<li>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>' +
        '<li><a href="https://material.io/resources/icons/?style=baseline">material.io</a></li>'
    },
    {
        'licenceTitle': 'Layout',
        'licenceText':
        '<li>https://getbootstrap.com/</li>' +
        '<li>https://getuikit.com/</li>'
    },
    {
        'licenceTitle': 'Scrollbar',
        'licenceText':
        '<li>http://manos.malihu.gr/jquery-custom-content-scroller/</li>'
    },
    {
        'licenceTitle': 'Timeline',
        'licenceText':
        '<li>' +
        'Copyright (c) 2020 by Ratko Solaja (https://codepen.io/Ratko_Solaja/pen/ztxkw)<br>' +
        'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br>' +
        'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br>' +
        'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.<br>' +
        '</li>'
    },
];
licences.forEach(val => {
    $('.licence').append(
        "<h5>- " + val.licenceTitle + "</h5>" +
        val.licenceText
    );
});
