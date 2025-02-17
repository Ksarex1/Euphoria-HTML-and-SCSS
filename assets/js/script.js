// Burger menu
let burgerButton = document.querySelector(".menu-icon")
let body = document.body
let menu = document.querySelector('.menu')
let input = document.querySelector(".header__search")

if (burgerButton && menu) {
    burgerButton.addEventListener("click", () => {
        burgerButton.classList.toggle("_active")
        body.classList.toggle("_lock")
        menu.classList.toggle("_active")
        input.classList.toggle("_active")
    })
}

// Favorite icon

let favoriteIcon = document.querySelectorAll(".limelight__content-favorite")
favoriteIcon.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.classList.toggle("active")
    })
})


// Swiper slider section welcome
const backgrounds = [
    '/assets/img/shop-hero-1-product-slide-1.jpg',
    '/assets/img/shop-hero-1-product-slide-2.jpg',
];

const slideContents = [
    {
        title: 'Summer Value Pack',
        desc: 'cool / colorful / comfy',
        view: 'T-Shirt / Tops',
    },
    {
        title: 'Winter Collection',
        desc: 'warm / cozy / stylish',
        view: 'Sweaters / Jackets',
    },
];

const swiper = new Swiper('.welcome-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        slideChange: function () {
            const activeIndex = this.realIndex;
            const swiperElement = document.querySelector('.swiper');
            swiperElement.style.backgroundImage = `url(${backgrounds[activeIndex]})`;
            const slideText = document.querySelector('.welcome-slider__text');
            slideText.querySelector('.welcome-slider__title').textContent = slideContents[activeIndex].title;
            slideText.querySelector('.welcome-slider__desc').textContent = slideContents[activeIndex].desc;
            slideText.querySelector('.welcome-slider__view').textContent = slideContents[activeIndex].view;
        }
    }
});
const swiperArrival = new Swiper('.arrival__swiper', {
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.arrival__button-prev',
        prevEl: '.arrival__button-next',
    },
    breakpoints: {
        976: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        692: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        482: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    }
});
const swiperFeedback = new Swiper('.feedback__slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: false,
    pagination: {
        el: '.feedback__pagination',
        clickable: true,
    },
    breakpoints: {
        976: {
            slidesPerView: 3,
        },
        692: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
    }
});

// Accordion js

document.addEventListener("DOMContentLoaded", () => {
    new Accordion(".js-accordion", {
        duration: 400, // скорость анимации
        showMultiple: false, // разрешить открытие нескольких секций
        collapse: true, // закрытие при повторном клике
    });
});


// Header-reg list

const headerRegList = document.querySelector(".header-reg__list");
const arrow = document.querySelector(".header-reg__list-arrow");
const headerRegContent = document.querySelector(".header-reg__list-content");
const headerRegSwipe = document.querySelector(".list-content-choose");
const headerRegTextTitle = document.querySelector(".list-title");


if (headerRegList) {
    let regTextTitle = headerRegTextTitle.textContent; // Динамическое значение

    headerRegList.addEventListener("click", () => {
        headerRegContent.classList.toggle("list-content-active");
        arrow.classList.toggle("arrow-active")
    });

    headerRegSwipe.addEventListener("click", (event) => {
        let buferText = event.target.textContent;
        event.target.textContent = regTextTitle;
        headerRegTextTitle.textContent = buferText;
        regTextTitle = buferText; 
    });
}
