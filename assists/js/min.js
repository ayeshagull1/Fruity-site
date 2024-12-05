
 
var swiper = new Swiper(".product-wrapper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      with: 320,
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    567: {
      with: 567,
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      with: 1024,
      slidesPerView: 4,
      spaceBetween: 30
    },
    1200: {
      with: 1200,
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});








 
var swiper = new Swiper(".testimonial-wrapper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      with: 320,
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    567: {
      with: 567,
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      with: 1024,
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      with: 1200,
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});









// Scroll smoothly to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
