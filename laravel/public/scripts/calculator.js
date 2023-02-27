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

// меню бургер
// -------------------------------------------------
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