//CHECHKING JQUERY
// window.onload = function () {
//     if(window.jQuery){
//         alert("Okay!");
//     }
//     else{
//         alert("Cry");
//     }
// };

//BG Special Header
var specialBG = document.getElementById('specialHeaderBG');
var textFood = document.getElementById('#textFood');
var textDrink = document.getElementById('#textDrink');

function myFood(){
    specialBG.style.left=0;
    specialBG.style.right="unset";
    $('#textFood').removeClass('text-ard-putih').addClass('text-ard-abu-abu-tua');
    $('#textDrink').removeClass('text-ard-abu-abu-tua').addClass('text-ard-putih');
}
function myDrink(){
    specialBG.style.left="unset";
    specialBG.style.right=0;
    $('#textFood').removeClass('text-ard-abu-abu-tua').addClass('text-ard-putih');
    $('#textDrink').removeClass('text-ard-putih').addClass('text-ard-abu-tua');
    console.log("ARDIAN");
}

//Special menu slide
$(document).ready(function () {
   $('.special-content').slick({
        infinite: false,
        draggable: false,
        speed: 1000,
        autoplay:false,
        nextArrow: $('#drink'),
        prevArrow: $('#food')
   });
});

$('.select-size').on('click',function () {
   console.log("ardian");
});