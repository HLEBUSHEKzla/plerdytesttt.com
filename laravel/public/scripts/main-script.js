// уменьшение хедера на скролл
if ($(window).width() > '799') {
    var cbpAnimatedHeader = (function() {
        var docElem = document.documentElement,
            header = document.querySelector('.header'),
            didScroll = false,
            changeHeaderOn = 100;

        function init() {
            window.addEventListener('scroll', function(event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 100);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                header.classList.add('header-shrink');
            } else {
                header.classList.remove('header-shrink');
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();
}
//  Главный слайдер с машинами

const banner = new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,

    }
});

// Слайдер "Как работает Янк?"
const swiper = new Swiper('.stages-slider', {
    breakpoints: {
        767: {
            direction: 'vertical',
        },
    },
    autoplay: {
        delay: 20000,
        stopOnLastSlide: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    parallax: true,
    speed: 2000,

});

$('.swiper-pagination-bullet').hover(function() {
    $(this).trigger("click");
});

swiper.on('slideChange', function() {
    var car_dot = document.getElementById('dot');
    var dot = swiper.realIndex;
    console.log(dot);
    if (dot == 0) {
        car_dot.classList.toggle('zero');
    } else {
        car_dot.classList.remove('zero');
    }
    if (dot == 1) {
        car_dot.classList.toggle('first');
    } else {
        car_dot.classList.remove('first');
    }

    if (dot == 2) {
        car_dot.classList.toggle('second');
    } else {
        car_dot.classList.remove('second');
    }

    if (dot == 3) {
        car_dot.classList.toggle('third');
    } else {
        car_dot.classList.remove('third');
    }


    if (dot == 4) {
        car_dot.classList.toggle('fourth');
    } else {
        car_dot.classList.remove('fourth');
    }

    if (dot == 5) {
        car_dot.classList.toggle('fifth');
    } else {
        car_dot.classList.remove('fifth');
    }
    if (dot == 6) {
        car_dot.classList.toggle('sixth');
    } else {
        car_dot.classList.remove('sixth');
    }
});

//----------------------------------------------
//Кнопки активные/неактывные

// на клик белый шрифт кнопке
// var greenBut = document.querySelectorAll(".button");

// [].forEach.call(greenBut, function(el) {
//     el.addEventListener('click', function(e) {
//         el.classList.add('active');
//     })
// });

// var green = document.querySelectorAll(".green");
// [].forEach.call(green, function(el) {
//     el.addEventListener('click', function(e) {
//         el.classList.add('active-link');
//     })
// });

const screenWidth = window.screen.width;
console.log(screenWidth);

// меню бургер
let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header__wrap');

let back = document.querySelector('body');
let header_list = document.querySelector('.nav');

header_burger.onclick = function() {
    header_burger.classList.toggle('active_m');
    header_menu.classList.toggle('active_m');

    back.classList.toggle('lock');
}
header_list.onclick = function() {
    header_list.classList.remove('active_m');

    header_burger.classList.remove('active_m');
    header_menu.classList.remove('active_m');

    back.classList.remove('lock');
}

// слайды about Yank(блок 3 главная страница) если ширина меньше 800px
const aboutItem = document.querySelectorAll('.about__item');
if ($(window).width() <= '800') {

    [].forEach.call(aboutItem, function(el) {
        el.classList.add("swiper-slide");
    });

    const swiper_about = new Swiper('.about-swiper', {
        autoplay: {
            delay: 10000,

        },
        parallax: true,
        speed: 2000,
        loop: true,
    });

    const swiper_about_bottom = new Swiper('.about-swiper-bottom', {
        autoplay: {
            delay: 7000,
            stopOnLastSlide: false,
        },
        parallax: true,
        speed: 2000,
        loop: true,

    });

} else {
    [].forEach.call(aboutItem, function(el) {
        el.classList.remove("swiper-slide");
    });

}

//   const screenWidtht = window.screen.width;
// const screenHeight = window.screen.height;

// console.log(screenHeight);
// console.log(screenWidtht);

//  ПОПАПЫ

// Открытие попапа "Подобрать авто"
function getAuto() {
    var popup = document.getElementById("get-auto-popup");
    var block = document.getElementById("block");

    popup.classList.toggle("show");
    console.log("piy");
    if (popup.classList.contains("show")) {
        block.classList.toggle("block");
    }

}
// ЗАКТЫРИЕ ПОП АПА ПОДОБРАТЬ АВТО
function getHide() {
    var popup = document.getElementById("get-auto-popup");
    var block = document.getElementById("block");
    popup.classList.remove("show");
    block.classList.remove("block");

}
// ЗАКРЫТИЕ ПОДБОРА АВТО НА КЛИК ВНЕ ФОРМЫ
var popup = document.getElementById("get-auto-popup");
popup.addEventListener('click', function(event) {
    var target = event.target;

    if (target.className === "get-auto show") {
        getHide();
        console.log('piedsy');
    }
});

//ОТКРЫТИЕ ПОП АПА КОНСУЛЬТАЦИИ
function myConsult() {
    console.log('piy');
    var popup = document.getElementById("popupConsult");
    var block = document.getElementById("block");
    var close = document.getElementById("close");
    popup.classList.toggle("show");

    if (popup.classList.contains("show")) {
        block.classList.toggle("block");
    }
    close.addEventListener("onclick", function() {
        popup.classList.toggle("show");
    })
}

//ЗАКРЫТИЕ ПОП АПА КОНСУЛЬТАЦИИ
function Hide() {
    var popup = document.getElementById("popupConsult");
    var block = document.getElementById("block");
    popup.classList.remove("show");
    block.classList.remove("block");

}

// ЗАКРЫТИЕ НА КЛИК ВНЕ ФОРМЫ (КОНСУЛЬТАЦИЯ)
var popupClose = document.getElementById("popupConsult");
popupClose.addEventListener('click', function(event) {
    var target = event.target;
    if (target.className === "pop-up-concult show") {
        Hide();
    }
});



//ОТКРЫТИЕ ПОП АПА ЗАКАЗА
function myConsultOrder() {
    console.log('piy');
    var popup = document.getElementById("popupConsultOrder");
    var block = document.getElementById("block");
    var close = document.getElementById("close");
    popup.classList.toggle("show");

    if (popup.classList.contains("show")) {
        block.classList.toggle("block");
    }
    close.addEventListener("onclick", function() {
        popup.classList.toggle("show");
    })
}

//ЗАКРЫТИЕ ПОП АПА ЗАКАЗА
function HideOrder() {
    var popup = document.getElementById("popupConsultOrder");
    var block = document.getElementById("block");
    popup.classList.remove("show");
    block.classList.remove("block");

}

// ЗАКРЫТИЕ НА КЛИК ВНЕ ФОРМЫ (КОНСУЛЬТАЦИЯ)
var popupClose = document.getElementById("popupConsultOrder");
popupClose.addEventListener('click', function(event) {
    var target = event.target;
    if (target.className === "pop-up-concult show") {
        Hide();
    }
});



var chosenCar = document.getElementById('chosenCar');

// Плейсхолдер в формах
$('.cool-input__input').on('input', function() {
    var $this = $(this);
    if ($this.val() == '') {
        $this.removeClass('cool-input__input_filled');
    } else {
        $this.addClass('cool-input__input_filled');
    }
});