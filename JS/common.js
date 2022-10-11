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


// 올해가 몇년인지 자동으로 계산하는 코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해를 계산해줌