$('.port-main').hide();
$('.skillSet').hide();
$('.main').hide();
$('.carousel').carousel({
    interval: 3000 * 1,
    pause: false
});

window.sr = ScrollReveal();

sr.reveal('#portPicture', {
    duration: 5000,
    origin: 'top',
    scale: 0.8
});

sr.reveal('#infoBtn', {
    duration: 5000,
    origin: 'bottom',
    scale: 0.8
});

sr.reveal('.navbar', {
    duration: 5000,
    origin: 'bottom',
    scale: 0.8
});

sr.reveal('footer', {
    duration: 5000,
    origin: 'top',
    scale: 0.8
});


var typed = new Typed('#intro', {
    strings: ["Hi, i'm Sam."],
    typeSpeed: 160,
    backSpeed: 40
});

$('#infoBtn').on('click', function () {

    $('.port-main').fadeIn(3500);
    $('.picture-inc').fadeOut();
    var typed = new Typed('#aboutMe', {
        strings: ["I’m a full stack web developer focused on producing professional and usable content.", "I develop websites that are both functional and visually engaging."],
        typeSpeed: 45,
        backSpeed: 10
    });
    $('.carousel').fadeIn(4000);
    setTimeout(function () {
        $('.carousel').fadeOut();
        $('#seeMore').fadeOut(1000);
        $('#aboutMe').fadeOut(1000);
    }, 12000);

    setInterval(function () {
        $('.skillSet').fadeIn('slow');
    }, 13000);

    setInterval(function () {
        $('.main').fadeIn();
        $('.html').animate({ width: '95%' }, 2000);
        $('.css').animate({ width: '85%' }, 2000);
        $('.js').animate({ width: '72%' }, 2000);
        $('.php').animate({ width: '70%' }, 2000);
        $('.ajax').animate({ width: '48%' }, 2000);
    }, 13600);
});



