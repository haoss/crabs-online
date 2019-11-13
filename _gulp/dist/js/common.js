'use strict';

// Document ready
$(document).on('ready', function(){

  var scroll = new SmoothScroll('a[data-scroll]', {
    speed: 800,
    updateURL: false
  });

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    showCloseBtn: false,
    closeOnBgClick: false,
    callbacks: {
      beforeOpen: function() {
        setTimeout(function(){
          $('input[autofocus]').focus();
        }, 300)
      }
    }
  });

  $('.modal__close').on('click', function() {
    $.magnificPopup.close();
  });

  $('.projects__carousel').slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '380px',
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          centerPadding: '280px',
        }
      },
      {
        breakpoint: 1199,
        settings: {
          centerPadding: '80px',
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: '60px',
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '0px',
          dots: true,
          arrows: false
        }
      }
    ]
  });

  navigation();
  scrollPage();

  //Chrome Smooth Scroll
  try {
      $.browserSelector();
      if($("html").hasClass("chrome")) {
          $.smoothScroll();
      }
  } catch(err) {

  };
});

$(window).on('load', function() {
  $(".loader").delay(400).fadeOut("slow");
});

$(window).on('scroll', function() { });
$(window).on('resize', function() { });

function navigation() {
  var btn = $('.header__btn');

  btn.on('click', function() {
    var _this = $(this);
    var body = $('body');
    var nav = $('.navigation');
    
    if (_this.hasClass('is-active')) {
      _this.removeClass('is-active');
      body.removeClass('is-active');
      nav.removeClass('is-active');
    } else {
      _this.addClass('is-active');
      body.addClass('is-active');
      nav.addClass('is-active');
    }
  })
}

function scrollPage() {
  var controller1 = new ScrollMagic.Controller();
  var controller2 = new ScrollMagic.Controller();
  
  // Scene 1
  var scene1Tl = new TimelineMax();
  scene1Tl
    .fromTo('.home__title', 1.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 'scene1Tl-line1')
    .fromTo('.section__text--one', 1.5, {y: '-=15px'}, {y: 0}, 'scene1Tl-line1')
    .fromTo('.home__wrapper', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, '-=1', 'scene1Tl-line2')
    .fromTo('.header__logo', 1, {autoAlpha: 0, x: '-=25px'}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('.body__social', 1, {autoAlpha: 0, x: '-=25px'}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('.header__btn', 1, {autoAlpha: 0, x: 25}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
  ;
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section1",
    reverse: false
  })
    .setTween(scene1Tl)
    .addTo(controller1);

  // Btn scrollTo 1
  var btn1Tl = new TimelineMax();
  btn1Tl
    .fromTo('#section-btn1', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene1 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.9
  })
    .setTween(btn1Tl)
    .addTo(controller2);

  // Scene 2
  var scene2Tl = new TimelineMax();
  scene2Tl
    .fromTo('#about__container', 1.5, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0})
  ;
  var scene2= new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.6,
    reverse: false
  })
    .setTween(scene2Tl)
    .addTo(controller1);

  // Btn scrollTo 2
  var btn2Tl = new TimelineMax();
  btn2Tl
    .fromTo('#section-btn2', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene2 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.9
  })
    .setTween(btn2Tl)
    .addTo(controller2);

  // Body up
  var btnUpTl = new TimelineMax();
  btnUpTl
    .to('.body__up', 0.5, {className:"+=is-visible"})
  ;
  var btnUpScene = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.2
  })
    .setTween(btnUpTl)
    .addTo(controller2);

  // Scene 3
  var scene3Tl = new TimelineMax();
  scene3Tl
    .fromTo('#section3 .section__header', 1.5, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
    .staggerFromTo( '.services__block', 0.5, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, 0.25)
    .fromTo('.services__footer', 1.5, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene3Tl)
    .addTo(controller1);

  // Btn scrollTo 3
  var btn3Tl = new TimelineMax();
  btn3Tl
    .fromTo('#section-btn3', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene3 = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: 0.9
  })
    .setTween(btn3Tl)
    .addTo(controller2);

  // Scene 4
  var scene4Tl = new TimelineMax();
  scene4Tl
    .fromTo('#section4 .section__header', 1, {autoAlpha: 0, x: '-=50px'}, {autoAlpha: 1, x: 0})
    .fromTo('.projects__nav', 1, {autoAlpha: 0, x: 50}, {autoAlpha: 1, x: 0})
    .fromTo('#section4 .tab-content', 1, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0})
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene4Tl)
    .addTo(controller1);

  // Btn scrollTo 4
  var btn4Tl = new TimelineMax();
  btn4Tl
    .fromTo('#section-btn4', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene4 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.9
  })
    .setTween(btn4Tl)
    .addTo(controller2);

  // Scene 5
  var scene5Tl = new TimelineMax();
  scene5Tl
    .fromTo('#section5 .section__header', 1.5, {autoAlpha: 0, x: '-=50px'}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.achievements__block', 1, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene5Tl)
    .addTo(controller1);

  // Btn scrollTo 5
  var btn5Tl = new TimelineMax();
  btn5Tl
    .fromTo('#section-btn5', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene5 = new ScrollMagic.Scene({
    triggerElement: "#section6",
    triggerHook: 0.9
  })
    .setTween(btn5Tl)
    .addTo(controller2);

  // Scene 6
  var scene6Tl = new TimelineMax();
  scene6Tl
    .fromTo('#section6 .section__header', 1.5, {autoAlpha: 0, x: '-=50px'}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.clients__block', 1, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section6",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene6Tl)
    .addTo(controller1);

  // Btn scrollTo 6
  var btn6Tl = new TimelineMax();
  btn6Tl
    .fromTo('#section-btn6', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: '-=75px'});
  var btnScene6 = new ScrollMagic.Scene({
    triggerElement: "#section7",
    triggerHook: 0.9
  })
    .setTween(btn6Tl)
    .addTo(controller2);

  // Scene 7
  var scene7Tl = new TimelineMax();
  scene7Tl
    .fromTo('.request__block', 1.5, {autoAlpha: 0, x: 50}, {autoAlpha: 1, x: 0})
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section7",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene7Tl)
    .addTo(controller1);

  // Scene 8
  var scene8Tl = new TimelineMax();
  scene8Tl
    .fromTo('.seo', 1.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0})
    .fromTo('.footer__center', 1.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0})
    .fromTo('.footer__bottom', 1.5, {autoAlpha: 0}, {autoAlpha: 1})
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene8Tl)
    .addTo(controller1);

  var width = $(window).width();

  if (width < 991) {
    controller1.destroy(true);
    TweenLite.set('*', {clearProps:"all"});
  }
}