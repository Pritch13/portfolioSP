$('.port-main').hide();
$('.skillSet').hide();
$('#seeMore').hide();
$('.carousel').carousel({
    interval: 3000* 1,
    pause: false
});

window.sr = ScrollReveal();
sr.reveal('#intro', {
  duration: 2000,
  origin: 'top'
});

sr.reveal('#portPicture', {
  duration: 2000,
  origin: 'top'
});

sr.reveal('#infoBtn', {
    duration: 2000,
    origin: 'bottom'
  });



var typed = new Typed('#intro', {
    strings: ["Hi, i'm Sam."],
    typeSpeed: 80,
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
    setTimeout(function(){
        $('.carousel').fadeOut();
      }, 14000);

      setTimeout(function(){
        $('#seeMore').fadeIn();
      }, 14400);

});

$('#seeMore').on('click', function(){
    $('#seeMore').fadeOut(1000);
    $('#aboutMe').fadeOut(1000);


    setInterval(function(){
    $('.skillSet').fadeIn('slow');
      }, 1000);

});
