$(document).ready(function () {
    let k = 0;

    let pickBack = document.getElementById("pickBack");
    pickBack.addEventListener('click', () => {
        k = 1
        console.log(k)
        $('#pickBack').css('background', 'aqua')
        $('#pickText').css('background', 'white')
    })

    let pickText = document.getElementById("pickText");
    pickText.addEventListener('click', () => {
        k = 0
        console.log(k)
        $('#pickText').css('background', 'aqua')
        $('#pickBack').css('background', 'white')
    })


    function componentToHex(color) {
        let hex = color.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex() {
        return "#" + componentToHex($('#slider').slider('value')) + componentToHex(0) + componentToHex(0);
    }

    function changeBack() {
        if(k===1) {
            $('#textContainer').css('background-color', rgbToHex())
        }else{
            $('#textContainer').css('color', rgbToHex())
        }
    }

    $("#slider").slider({
        range: "min",
        value: 1,
        min: 1,
        max: 255,
        slide: function () {
            changeBack()
        },

    });

});



