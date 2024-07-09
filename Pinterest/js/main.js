// 전역 변수
const frame = 'section';
const box = 'article';
const speed = '0.5s';
const activeClass = 'on';
const btn = document.querySelectorAll('main ul li');

// 플러그인의 정보값이 담길 변수
let grid; 

// 모든 콘텐츠의 로딩이 완료되면
window.addEventListener("load", ()=>{
init(); // 화면 초기화 함수
filter(btn);  // 정렬 버튼 함수
})

// 화면 초기화 함수
function init() {
  // 변수 grid에 담길 결과값을 filter에서도 활용 (전역 변수)
  grid = new Isotope(frame, {
    itemSelector : box,
    columnWidth : box,
    transitionDuration: speed
  });
}

// 정렬 버튼 함수
function filter(arr) {
  for (let el of arr) {
    el.addEventListener("click", e => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute('href');
  
      grid.arrange({
        filter : sort
      });
  
      for (let el of arr) {
        el.classList.remove(activeClass);
      }
  
      e.currentTarget.classList.add(activeClass);
    });
  }
}