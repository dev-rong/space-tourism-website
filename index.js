// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it
const one = ele => document.querySelector(ele)

const nav = one('.primary-navigation')   
const navToggle = one('.mobile-nav-toggle')

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    visibility === "false"? 
    nav.setAttribute("data-visible", "true") && navToggle.setAttribute("aria-expanded", "true") : 
    nav.setAttribute("data-visible", "false") && navToggle.setAttribute("aria-expanded", "false")
})

// 인터넷 익스플로러11+ 은 표준을 지원하지만, 이전 버전들은 dataset을 지원하지 않습니다. 
// IE 10 이하를 지원하기 위해서는 대신 getAttribute()를 통해 데이터 속성을 접근해야 합니다. 
// 또한, JS 데이터 저장소에 저장하는 것과 비교해서 데이터 속성 읽기의 성능은 저조합니다.
// navToggle.addEventListener("click", () => {
//      let visibility = nav.dataset.visible;
//      visibility==="false"? visibility="true":visibility="false"; 
// })