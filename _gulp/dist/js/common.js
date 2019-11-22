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

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function(e,n,A){function o(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function t(e,n){return typeof e===n}function a(){var e,n,A,o,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(o=t(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),s.push((o?"":"no-")+l.join("-"))}}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var t=e.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==t.length?Modernizr[t[0]]=n:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=n),o([(n&&0!=n?"":"no-")+t.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),a(),o(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

// Document ready
$(document).on('ready', function(){

  var scroll = new SmoothScroll('a[data-scroll]', {
    speed: 800,
    updateURL: false
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
  btnUp();
});

$(window).on('load', function() {
  $(".loader").delay(400).fadeOut("slow");

  scrollPage();
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

  // Scene 1
  var scene1Tl = gsap.timeline();
  scene1Tl
    .from('.home__title', {duration: 1.5, autoAlpha: 0, y: 50}, 'scene1Tl-line1')
    .from('.home__slogan', {duration: 1, autoAlpha: 0, y: 25}, '-=0.5')
    .from('.home__content', {duration: 1, autoAlpha: 0, y: 25}, '-=0.5')
    .from('.header__logo', {duration: 1, autoAlpha: 0, x: -25}, 'scene1Tl-line3')
    .from('.body__social', {duration: 1, autoAlpha: 0, x: -25}, 'scene1Tl-line3')
    .from('.header__btn', {duration: 1, autoAlpha: 0, x: 25}, 'scene1Tl-line3')
  ;
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#section1",
    reverse: false
  })
    .setTween(scene1Tl)
    .addTo(controller1);

  // Btn scrollTo 1
  var btn1Tl = gsap.timeline();
  btn1Tl
    .fromTo('#section-btn1', {autoAlpha: 0, y: 25}, {duration: 1, autoAlpha: 1, y: 0})
    .fromTo('#section-btn1 > span', {autoAlpha: 0, height: 0}, {duration: 0.5, autoAlpha: 1, height: '160px'})
    .fromTo('#section-btn1 > span > span', {autoAlpha: 0}, {duration: 0.5, autoAlpha: 1})
    .fromTo('#section-btn1 > span > span > span', {autoAlpha: 0}, {duration: 0.5, autoAlpha: 1})
  ;  
  var btnScene1 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.9
  })
    .setTween(btn1Tl)
    .addTo(controller2);

  // Btn scrollTo 6
  var btn6Tl = gsap.timeline();
  btn6Tl
    .fromTo('#section-btn6', {autoAlpha: 0, y: 25}, {duration: 1, autoAlpha: 1, y: 0})
    .fromTo('#section-btn6 > span', {autoAlpha: 0, height: 0}, {duration: 0.5, autoAlpha: 1, height: '160px'})
    .fromTo('#section-btn6 > span > span', {autoAlpha: 0}, {duration: 0.5, autoAlpha: 1})
    .fromTo('#section-btn6 > span > span > span', {autoAlpha: 0}, {duration: 0.5, autoAlpha: 1})
  ;
  var btnScene6 = new ScrollMagic.Scene({
    triggerElement: "#section7",
    triggerHook: 0.9
  })
    .setTween(btn6Tl)
    .addTo(controller2);

  // Scene 2
  var scene2Tl = gsap.timeline();
  scene2Tl
    .fromTo('#about__container .section__header', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('.about__slogan', {autoAlpha: 0, y: 25}, {duration: 1, autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.about__content', {autoAlpha: 0, y: 25}, {duration: 1, autoAlpha: 1, y: 0}, '-=0.5')
    .fromTo('.section__text--2', {autoAlpha: 0}, {duration: 1, autoAlpha: 0.06})
  ;
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook: 0.6,
    reverse: false
  })
    .setTween(scene2Tl)
    .addTo(controller1);

  // Scene 3
  var scene3Tl = gsap.timeline();
  scene3Tl
    .fromTo('#section3 .section__header', {autoAlpha: 0, y: 25}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo( '.services__block', {autoAlpha: 0, y: 25}, {duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.25})
    .fromTo('#section3 .services__footer', {autoAlpha: 0, y: 25}, {duration: 1.5, autoAlpha: 1, y: 0})
  ;
  var scene3 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene3Tl)
    .addTo(controller1);

  // Scene 4
  var scene4Tl = gsap.timeline();
  scene4Tl
    .fromTo('#section4 .section__header', {autoAlpha: 0, x: -50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo('#section4 .projects__nav', {autoAlpha: 0, x: 50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo('#section4 .tab-content', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0})
  ;
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene4Tl)
    .addTo(controller1);

  // Scene 5
  var scene5Tl = gsap.timeline();
  scene5Tl
    .fromTo('#section5 .section__header', {autoAlpha: 0, x: -50}, {duration: 1.5, autoAlpha: 1, x: 0})
    .fromTo( '#section5 .achievements__block', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.25})
  ;
  var scene5 = new ScrollMagic.Scene({
    triggerElement: "#section5",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene5Tl)
    .addTo(controller1);

  // Scene 6
  var scene6Tl = gsap.timeline();
  scene6Tl
    .fromTo('#section6 .section__header', {autoAlpha: 0, x: -50}, {duration: 1.5, autoAlpha: 1, x: 0})
    .fromTo( '.clients__block', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.25})
  ;
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#section6",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene6Tl)
    .addTo(controller1);

  // Scene 7
  var scene7Tl = gsap.timeline();
  scene7Tl
    .fromTo('#section7 .request__block', {autoAlpha: 0, x: 50}, {duration: 1.5, autoAlpha: 1, x: 0})
    .fromTo('#section7 .btn--1-service', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
  ;
  var scene7 = new ScrollMagic.Scene({
    triggerElement: "#section7",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene7Tl)
    .addTo(controller1);

  // Scene 8
  var scene8Tl = gsap.timeline();
  scene8Tl
    .fromTo('.seo', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('.footer__center', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('.footer__bottom', {autoAlpha: 0}, {duration: 1.5, autoAlpha: 1})
  ;
  var scene8 = new ScrollMagic.Scene({
    triggerElement: "#footer",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene8Tl)
    .addTo(controller1);

  // Scene 9
  var scene9Tl = gsap.timeline();
  scene9Tl
    .fromTo('#section9 .section__header', {autoAlpha: 0, x: -50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo( '.contacts__block', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.25})
    .fromTo( '#section9 .projects__nav', {autoAlpha: 0, x: 50}, {duration: 0.5, autoAlpha: 1, x: 0})
    .fromTo( '#tab-content', {autoAlpha: 0, x: -50}, {duration: 0.5, autoAlpha: 1, x: 0})
  ;
  var scene9 = new ScrollMagic.Scene({
    triggerElement: "#section9",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene9Tl)
    .addTo(controller1);

  // Scene 10
  var scene10Tl = gsap.timeline();
  scene10Tl
    .fromTo('#section10 .section__header', {autoAlpha: 0, x: -50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo( '.services__row', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0, stagger: 0.25})
  ;
  var scene10 = new ScrollMagic.Scene({
    triggerElement: "#section10",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene10Tl)
    .addTo(controller1);

  // Scene 11
  var scene11Tl = gsap.timeline();
  scene11Tl
    .fromTo('#section10 .services__footer', {autoAlpha: 0, y: 25}, {duration: 1.5, autoAlpha: 1, y: 0})
  ;
  var scene11 = new ScrollMagic.Scene({
    triggerElement: "#section10 .services__footer",
    triggerHook: 0.7,
    reverse: false
  })
    .setTween(scene11Tl)
    .addTo(controller1);

  // Scene 12
  var scene12Tl = gsap.timeline();
  scene12Tl
    .fromTo('#section12 .section__header', {autoAlpha: 0, x: -50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo('#section12 .one-page__thumb', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0})
  ;
  var scene12 = new ScrollMagic.Scene({
    triggerElement: "#section12",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene12Tl)
    .addTo(controller1);

  // Scene 13
  var scene13Tl = gsap.timeline();
  scene13Tl
    .fromTo('#section12 .one-page__content--top', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0})
    .fromTo('#section12 .video__thumb', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('#section12 .one-page__content--center', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0})
  ;
  var scene13 = new ScrollMagic.Scene({
    triggerElement: "#section12 .one-page__content--top",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene13Tl)
    .addTo(controller1);

  // Scene 14
  var scene14Tl = gsap.timeline();
  scene14Tl
    .fromTo( '#section12 .achievements__block', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0, stagger: 0.25})
    .fromTo('#section12 .one-page__content--bottom', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0})
  ;
  var scene14 = new ScrollMagic.Scene({
    triggerElement: "#section12 .achievements__wrapper",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene14Tl)
    .addTo(controller1);

  // Scene 15
  var scene15Tl = gsap.timeline();
  scene15Tl
    .fromTo('#section15 .section__header', {autoAlpha: 0, x: -50}, {duration: 1, autoAlpha: 1, x: 0})
    .fromTo('#section15 .one-page__thumb--top', {autoAlpha: 0, y: 50}, {duration: 1, autoAlpha: 1, y: 0})
  ;
  var scene15 = new ScrollMagic.Scene({
    triggerElement: "#section15",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene15Tl)
    .addTo(controller1);

  // Scene 16
  var scene16Tl = gsap.timeline();
  scene16Tl
    .fromTo('#section15 .one-page__content--top', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0})
    .fromTo('#section15 .one-project__gallery', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('#section15 .one-page__content--one-project', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0})
  ;
  var scene16 = new ScrollMagic.Scene({
    triggerElement: "#section15 .one-page__content--top",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene16Tl)
    .addTo(controller1);

  // Scene 17
  var scene17Tl = gsap.timeline();
  scene17Tl
    .fromTo('#section15 .one-page__thumb--bottom', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('#section15 .one-project__info', {autoAlpha: 0, y: 50}, {duration: 1.5, autoAlpha: 1, y: 0})
    .fromTo('#section15 .projects__footer', {autoAlpha: 0, y: 50}, {duration: 0.5, autoAlpha: 1, y: 0})
  ;
  var scene17 = new ScrollMagic.Scene({
    triggerElement: "#section15 .one-page__thumb--bottom",
    triggerHook: 0.5,
    reverse: false
  })
    .setTween(scene17Tl)
    .addTo(controller1);

  console.clear();

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
