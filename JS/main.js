const searchEl = document.querySelector('.search');
// document .querySelector를 통해 .search 라는 요소를 선택해 searchEl에 할당

const searchInputEl = searchEl.querySelector('input');
// searchEl로 이미 .search를 찾았기 때문에 searchEl 안에서 input을 찾음

searchEl.addEventListener('click',function() {
    
    searchInputEl.focus();
    // 자바스크립트로 포커스가 가능한 인풋요소에 포커스를 강제적용
});
// search요소에 클릭이벤트를 추가하는 메소드

// input 요소에 포커스가 되면 클래스가 search인 div요소에 focused 라는 클래스 추가
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    // 특정 요소에 클래스 정보를 가지고 있는 객체에서 클래스 정보를 추가(add)
    
    searchInputEl.setAttribute('placeholder', '통합검색');
    // searchInputEl에 html 속성을 지정하기 위한 것
    // -> input 요소에 추가할 수 있는 placeholder 라는 html

});
// searchInputEl, 즉 input 요소에 focus가 된 경우,
// input 요소에 추가할 수 있는  html 요소인 placeholder로 통합검색이라는 단어가 나오도록 
// html 문서를 조작한 것!

/* 포커스가 되지 않았을때, 즉, blur 되었을 때, 포커스이벤트를 다시 제거해주는 코드 작성 */
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    // 특정 요소에 클래스 정보를 가진 객체에서 클래스 정보를 제거 (remove)
    
    searchInputEl.setAttribute('placeholder', '');
    // placeholder속성으로 통합검색이라고 작성된 부분을 빈 문자열'' 로 변경

});

/* 배지를 스크롤의 위치에 따라 사라지게 만들기 */
// document.querySelector(); => 특정한 요소를 찾아서 변수에 할당
const badgeEl = document.querySelector('header .badges'); 

const toTopEl = document.querySelector('#to-top');

// 스크롤이라는 이벤트가 발생할 때마다 특정 함수 내용 실행
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY); 
    if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); 
    gsap.to(badgeEl, .6, {
        opacity: 0,
        display : 'none'
    });

    // 버튼 보이기
    gsap.to(toTopEl,.2, {
        x: 0
    }) 

    }
    else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
        opacity: 1,
        display : 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl,.2, {
        x: 100
    }) 
    }
    
}, 300));
/* throttle 사용 방법 */
// _.throttle(함수, 시간);


toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

/* 순차적 애니메이션 관련 기능 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay : (index + 1) *.7, // 0.7 -> 1.4 -> 2.1 -> 2.7 순으로 나타남 
        opacity: 1 
    });
});
 
/* new Swiper(선택자, 옵션) */
new Swiper('.notice-line .swiper-container', {
    direction : 'vertical',
    autoplay : true,
    loop :true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백
    centeredSlides : true, // 1번 슬라이드가 가운데
    loop : true,
    autoplay : {
        delay: 5000
    },
    pagination : {
        el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable : true // 사용자 페이지 번호 요소 제어 가능 여부
    },
    navigation : {
        prevEl : '.promotion .swiper-prev', // 이전 버튼
        nextEl : '.promotion .swiper-next' // 다음 버튼
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop : true,
    spaceBetween: 30,
    slidesPerView : 5,
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
        nextEl: '.awards .swiper-next' // 다음 버튼 선택자
      }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click',function() {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        // 숨김처리
        promotionEl.classList.add('hide');
    }
    else {
        // 보임처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  
function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y : size, // y축으로 20px
        repeat : -1,
        yoyo :true, // 한번 재생된 애니메이션을 뒤로 저장
        ease: Power1.easeInOut,
        delay : random(0,delay)
    });
}

// 함수 실행
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// Scroll Magic

// Scene() :스크롤매직이라는 자바스크립트 라이브러리를 통해 특정한 요소를 감시하는 옵션을 지정하는 매소드
// 제어하려는 섹션들이 보이는지 보이지 않는지를 감시해야 하기 때문에
// setClassToggle() : 클래스에 대한 제어

const spyEls = document.querySelectorAll('section.scroll-spy');


spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl,
            // 감시하려고 하는 섹션부분에 스크롤 스파이들을 하나씩 붙여줌
            // 보여짐의 여부를 감시할 요소를 triggerElement에 지정
            triggerHook : .8
            // 감시하고 있는 요소가 뷰포트에서 0.8 지점에 오게 됐을 때, 트리거를 걸어줌
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
        
}); 

// 올해가 몇년인지 자동으로 계산하는 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해를 계산해줌