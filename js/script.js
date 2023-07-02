let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => { //onmouseover = onclick
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginBtn.classList.remove('active');
    navBar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => { //onmouseover = onclick
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginBtn.classList.remove('active');
    navBar.classList.remove('active');
}

let loginBtn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => { //onmouseover = onclick
    loginBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => { //onmouseover = onclick
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginBtn.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginBtn.classList.remove('active');
    navBar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    centeredSlider: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    centeredSlider: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });  