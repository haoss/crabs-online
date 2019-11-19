'use strict';

/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
  byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
  r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
  "padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
  display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
  this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
  }n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});

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
    overflowY: 'scroll',
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

  $('.services__row-title').matchHeight();

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
  var scene9Tl = new TimelineMax();
  var scene10Tl = new TimelineMax();
  var scene11Tl = new TimelineMax();
  
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
    .fromTo('.header__logo', 1, {autoAlpha: 0, x: -25}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
    .fromTo('.body__social', 1, {autoAlpha: 0, x: -25}, {autoAlpha: 1, x: 0}, 'scene1Tl-line3')
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
    .fromTo('#section-btn2', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
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
    .fromTo('#section3 .services__footer', 1.5, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
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
    .fromTo('#section-btn3', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
  var btnScene3 = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: 0.9
  })
    .setTween(btn3Tl)
    .addTo(controller2);

  // Scene 4
  scene4Tl
    .fromTo('#section4 .section__header', 1, {autoAlpha: 0, x: -50}, {autoAlpha: 1, x: 0})
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
    .fromTo('#section-btn4', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
  var btnScene4 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.9
  })
    .setTween(btn4Tl)
    .addTo(controller2);

  // Scene 5
  scene5Tl
    .fromTo('#section5 .section__header', 1.5, {autoAlpha: 0, x: -50}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.achievements__block', 1, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)
  ;
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene5Tl)
    .addTo(controller1);

  // Btn scrollTo 5
  btn5Tl
    .fromTo('#section-btn5', 1, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
  var btnScene5 = new ScrollMagic.Scene({
    triggerElement: "#section6",
    triggerHook: 0.9
  })
    .setTween(btn5Tl)
    .addTo(controller2);

  // Scene 6
  scene6Tl
    .fromTo('#section6 .section__header', 1.5, {autoAlpha: 0, x: -50}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.clients__block', 0.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)
  ;
  var scene6 = new ScrollMagic.Scene({
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
  var scene7 = new ScrollMagic.Scene({
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
  var scene8 = new ScrollMagic.Scene({
    triggerElement: "#footer",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene8Tl)
    .addTo(controller1);

  // Scene 9
  scene9Tl
    .fromTo('#section9 .section__header', 1, {autoAlpha: 0, x: -50}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.contacts__block', 0.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)
  ;
  var scene9 = new ScrollMagic.Scene({
    triggerElement: "#section9",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene9Tl)
    .addTo(controller1);

  // Scene 10
  scene10Tl
    .fromTo('#section10 .section__header', 1, {autoAlpha: 0, x: -50}, {autoAlpha: 1, x: 0})
    .staggerFromTo( '.services__row', 0.5, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0}, 0.25)    
  ;
  var scene10 = new ScrollMagic.Scene({
    triggerElement: "#section10",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene10Tl)
    .addTo(controller1);

  // Scene 10
  scene11Tl
    .fromTo('#section10 .services__footer', 1.5, {autoAlpha: 0, y: 25}, {autoAlpha: 1, y: 0})
  ;
  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#section10 .services__footer",
    triggerHook: 0.7,
    reverse: false
  })
    .setTween(scene11Tl)
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
