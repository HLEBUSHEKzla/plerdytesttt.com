// const swiper = new Swiper('.edit-item__slider',    {
//     slidesPerView: 1,
//     watchOverflow: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },

//       thumbs:{
//         swiper:{
//             el:"image-mini-slider",
//             slidesPerView: 3,
//         }
//       }
//   });

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