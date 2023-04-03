// Project //

$(function () {
  const swiper = new Swiper(".swiper-container", {
    speed: 400,

    // Default parameters
    slidesPerView: 3,
    spaceBetween: 20,

    // direction & loop
    // - direction : 'horizontal' | 'vertical'
    // - loop : false | true
    direction: "horizontal",
    loop: true,

    // if we need pagination  <= 하단 페이지네이션
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // Navigation Arrow  <= 좌우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Auto Play
    autoplay: {
      delay: 3000,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
console.log("1");
// // popup //

// var openButton = document.querySelector("#slide1");
// openButton.onclick = () => {
//   document.querySelector("#popup1").style.display = "block";
//   console.log("hi");
// };
// // 팝업창은 display: none으로 기본 세팅 하고,  css 다적용해놓으면 됩니다.

// var closeButton = document.querySelector("#closebtn");
// closeButton.onclick = () => {
//   document.querySelector("#popup1").style.display = "none";
// };
