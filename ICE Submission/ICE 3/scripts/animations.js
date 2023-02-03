function fadeInOutTO() {
    
    // fade out of display
    $('.red-box').fadeOut(3000);

    // fade in to display
    $('.red-box').fadeIn(1500);

    // fade to an opacity
    $('.green-box').fadeTo(2000, .3);

    // fade toggle (half opacity)
    $('.blue-box').fadeTo(1000, .5);

    // toggles the display (went to none)
    $('.blue-box').fadeToggle();
    // toggles the display value (went to display: block [remembered previous valiue])
    $('.blue-box').fadeToggle();
}


function hideElement() {
    $('.red-box').hide(1000);
    $('.red-box').show(2000);
    $('.red-box').slideUp(2000);
    $('.red-box').slideDown(2000);
    $('.red-box').slideToggle(2000);
    $('.red-box').slideToggle(2000);
    
}


function chainAnimation() {
    $('.red-box').fadeTo(1000, .5);
    $('.green-box').delay(1000).fadeTo(1000, .5);

    // chaining animation
    $('.blue-box').delay(2000).fadeTo(1000, .5).fadeTo(1000, 1).delay(1000).fadeOut();
}

chainAnimation();
//hideElement();
//fadeInOutTO();