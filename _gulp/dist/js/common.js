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
  btnUp();

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

$(window).on('scroll', function() {
  btnUp();
});
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
  
  var scene1Tl = new TimelineMax();
  var scene2Tl = new TimelineMax();
  var scene3Tl = new TimelineMax();
  var scene4Tl = new TimelineMax();
  var scene5Tl = new TimelineMax();
  var scene6Tl = new TimelineMax();
  var scene7Tl = new TimelineMax();
  var scene8Tl = new TimelineMax();
  
  var btn1Tl = new TimelineMax();
  var btn2Tl = new TimelineMax();
  var btn3Tl = new TimelineMax();
  var btn4Tl = new TimelineMax();
  var btn5Tl = new TimelineMax();
  var btn6Tl = new TimelineMax();

  // Scene 1
  scene1Tl
    .fromTo('.home__title', 1.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 'scene1Tl-line1')
    .fromTo('.home__slogan', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.home__content', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.header__logo', 1, {autoAlpha: 0, x: '-=25px'}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('.body__social', 1, {autoAlpha: 0, x: '-=25px'}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('.header__btn', 1, {autoAlpha: 0, x: 25}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('#section-btn1', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, 'scene1Tl-line4')
  ;
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section1",
    reverse: false
  })
    .setTween(scene1Tl)
    .addTo(controller1);

  // Btn scrollTo 1
  btn1Tl
    
    .fromTo('#section-btn1 > span', 0.5, {autoAlpha: 0, height: 0}, {autoAlpha: 1, height: '160px'})
    .fromTo('#section-btn1 > span > span', 0.5, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#section-btn1 > span > span > span', 0.5, {autoAlpha: 0}, {autoAlpha: 1})
  ;  
  var btnScene1 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.9
  })
    .setTween(btn1Tl)
    .addTo(controller2);

  // Scene 2
  scene2Tl
    .fromTo('#about__container .section__header', 1.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0})
    .fromTo('.about__slogan', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.about__content', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.section__text--2', 1, {autoAlpha: 0}, {autoAlpha: 0.06})
  ;
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.6,
    reverse: false
  })
    .setTween(scene2Tl)
    .addTo(controller1);

  // Btn scrollTo 2
  btn2Tl
    .fromTo('#section-btn2', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene2 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.9
  })
    .setTween(btn2Tl)
    .addTo(controller2);

  // Scene 3
  
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
  
  btn3Tl
    .fromTo('#section-btn3', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene3 = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: 0.9
  })
    .setTween(btn3Tl)
    .addTo(controller2);

  // Scene 4
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
  btn4Tl
    .fromTo('#section-btn4', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene4 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.9
  })
    .setTween(btn4Tl)
    .addTo(controller2);

  // Scene 5
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
  btn5Tl
    .fromTo('#section-btn5', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0});
  var btnScene5 = new ScrollMagic.Scene({
    triggerElement: "#section6",
    triggerHook: 0.9
  })
    .setTween(btn5Tl)
    .addTo(controller2);

  // Scene 6
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
  btn6Tl
    .fromTo('#section-btn6', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
    .fromTo('#section-btn6 > span', 0.5, {autoAlpha: 0, height: 0}, {autoAlpha: 1, height: '160px'})
    .fromTo('#section-btn6 > span > span', 0.5, {autoAlpha: 0}, {autoAlpha: 1})
    .fromTo('#section-btn6 > span > span > span', 0.5, {autoAlpha: 0}, {autoAlpha: 1})
  ;
  var btnScene6 = new ScrollMagic.Scene({
    triggerElement: "#section7",
    triggerHook: 0.9
  })
    .setTween(btn6Tl)
    .addTo(controller2);

  // Scene 7
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

function btnUp() {
  var width = $(window).width();
  var btn = $('.body__up');

  if (btn.length <= 0) return;

  if ($(window).scrollTop() >= 500) {
    btn.addClass('is-visible');
  } else {
    btn.removeClass('is-visible');
  }
}