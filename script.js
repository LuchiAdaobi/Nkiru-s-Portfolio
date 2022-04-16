
// NAV SCROLL 
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }

        // SCROLL UP BUTTON SHOW AND HIDE SCRIPT

      if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });



    // SLIDE-UP SCRIPT
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // TOGGLE MENU
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});

// TYPING ANIMATION
    var typed = new Typed(".typing", {
        strings: [ "Designer", "Developer", "Blogger", "Freelancer", "Entrepreneur"],
        typespeed: 100,
        backspeed: 60,
        loop: true
    })
    var typed = new Typed(".typing2", {
        strings: [ "Designer", "Developer", "Blogger", "Freelancer", "Entrepreneur"],
        typespeed: 100,
        backspeed: 60,
        loop: true
    })


// OWL CAROUSEL

$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 1000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
}

);






