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

$(".polzunok-5").slider({
    min: 6000,
    max: 305000,
    values: [35000, 117000],
    range: true,
    animate: "fast",
    slide: function(event, ui) {
        $(".polzunok-input-5-left").val(ui.values[0]);
        $(".polzunok-input-5-right").val(ui.values[1]);
    }
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(".polzunok-container-5 input").change(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
        opt_left = $(".polzunok-5").slider("option", "min"),
        where_right = $(".polzunok-5").slider("values", 1),
        input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
        opt_right = $(".polzunok-5").slider("option", "max"),
        where_left = $(".polzunok-5").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
        input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
        input_right = 0;
    }
    $(".polzunok-input-5-left").val(input_left);
    $(".polzunok-input-5-right").val(input_right);
    if (input_left != where_left) {
        $(".polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".polzunok-5").slider("values", 1, input_right);
    }
});

// Плейсхолдер в формах
$('.cool-input__input').on('input', function() {
    var $this = $(this);
    if ($this.val() == '') {
        $this.removeClass('cool-input__input_filled');
    } else {
        $this.addClass('cool-input__input_filled');
    }
});

// на клик белый шрифт кнопке
var greenBut = document.querySelectorAll(".but");

[].forEach.call(greenBut, function(el) {
    el.addEventListener('click', function(e) {
        el.classList.add('active');
    })
});

//ОТКРЫТИЕ ПОП АПА ФИЛЬТРА
function parSearch() {
    console.log('piy');
    var popup = document.getElementById("filterPopup");
    var block = document.getElementById("block");
    // var close = document.getElementById("close");
    popup.classList.toggle("showFilter");

    if (popup.classList.contains("showFilter")) {
        block.classList.toggle("block");
    }
    // close.addEventListener("onclick", function() {
    //     popup.classList.toggle("show");
    // })

}

//ЗАКРЫТИЕ ПОП АПА ФИЛЬТРА
function HideFilter() {
    var popup = document.getElementById("filterPopup");
    var block = document.getElementById("block");
    popup.classList.remove("showFilter");
    block.classList.remove("block");

}

// ЗАКРЫТИЕ НА КЛИК ВНЕ ФОРМЫ (ФИЛЬТР)
var popupClose = document.getElementById("filterPopup");
popupClose.addEventListener('click', function(event) {
    var target = event.target;
    if (target.className === "filter__popup showFilter") {
        HideFilter();
    }
});



// // ЗАКРЫТИЕ НА КЛИК ВНЕ НАВИГАЦИИ
// var navClose = document.getElementById("nav");
// navClose.addEventListener('click', function(event) {
//     var target = event.target;
//     if (target.className === "header__wrap") {
//         HideNav();
//     }
// });

// function HideFilter() {
//     var navClose = document.getElementById("nav");

//     var block = document.getElementById("block");
//     popup.classList.remove("showFilter");
//     block.classList.remove("block");

// }