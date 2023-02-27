$(document).ready(function() {
    $('#picker').dateTimePicker();
    $('#picker-no-time').dateTimePicker({
        showTime: false,
        dateFormat: 'DD/MM/YYYY',
        title: 'Обрати час та дату',
        locale: 'ua',
        buttonTitle: "Обрати",

    });
})