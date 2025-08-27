$(function(){
    let tagOTB = $('.sec4 .product .tag').offset().top + $('.sec4 .product .tag').outerHeight()

    $(window).scroll(function(){

        if($(window).scrollTop() + $(window).height() >= tagOTB){
            $('.sec5 .hidden-animate').addClass('animate__animated animate__bounceInLeft animate__delay-2s')
        }else{
            $('.sec5 .hidden-animate').removeClass('animate__animated animate__bounceInLeft animate__delay-2s')
        }
    })
    
})