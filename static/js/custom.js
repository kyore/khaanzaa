"use strict";function accrodion(){$(".accrodion-grp").length&&$(".accrodion-grp").each(function(){var t=$(this).data("grp-name"),a=$(this),e=a.find(".accrodion");a.addClass(t),a.find(".accrodion .accrodion-content").hide(),a.find(".accrodion.active").find(".accrodion-content").show(),e.each(function(){$(this).find(".accrodion-title").on("click",function(){!1===$(this).parent().hasClass("active")&&($(".accrodion-grp."+t).find(".accrodion").removeClass("active"),$(".accrodion-grp."+t).find(".accrodion").find(".accrodion-content").slideUp(),$(this).parent().addClass("active"),$(this).parent().find(".accrodion-content").slideDown())})})})}function thmMailchimp(){$(".mailchimp-form").length&&$(".mailchimp-form").each(function(){$(this).validate({rules:{email:{required:!0,email:!0}},submitHandler:function(t){return $.post($(t).attr("action"),$(t).serialize(),function(a){$(t).parent().find(".result").append(a),$(t).find('input[type="text"]').val(""),$(t).find('input[type="email"]').val(""),$(t).find("textarea").val("")}),!1}})})}function thmOwlCarousel(){$(".testimonials-carousel").length&&$(".testimonials-carousel").owlCarousel({loop:!0,margin:0,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoWidth:!1,autoplay:!1,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:1,autoWidth:!1},600:{items:1,autoWidth:!1},768:{items:2,autoWidth:!1},1000:{items:2,autoWidth:!1}}}),$(".testimonials-carousel-style-one").length&&$(".testimonials-carousel-style-one").owlCarousel({loop:!0,margin:0,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:1,autoWidth:!1},600:{items:1,autoWidth:!1},1000:{items:1,autoWidth:!1}}}),$(".testimonials-carousel-style-two").length&&$(".testimonials-carousel-style-two").owlCarousel({loop:!0,margin:0,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:1,autoWidth:!1},600:{items:1,autoWidth:!1},1000:{items:1,autoWidth:!1}}}),$(".project-carousel-style-three").length&&$(".project-carousel-style-three").owlCarousel({loop:!0,margin:6,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:2,autoWidth:!1},600:{items:3,autoWidth:!1},1000:{items:4,autoWidth:!1},1200:{items:6,autoWidth:!1}}}),$(".team-carousel-style-one").length&&$(".team-carousel-style-one").owlCarousel({loop:!0,margin:30,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1,nav:!0,dots:!1},480:{items:1,autoWidth:!1,nav:!0,dots:!1},600:{items:2,autoWidth:!1,nav:!0,dots:!1},768:{items:2,autoWidth:!1,nav:!0,dots:!1},800:{items:2,autoWidth:!1,nav:!0,dots:!1},1000:{items:3,autoWidth:!1}}}),$(".blog-carousel-style-one").length&&$(".blog-carousel-style-one").owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1,nav:!0,dots:!1},480:{items:1,autoWidth:!1,nav:!0,dots:!1},600:{items:2,autoWidth:!1,nav:!0,dots:!1},768:{items:2,autoWidth:!1,nav:!0,dots:!1},800:{items:2,autoWidth:!1,nav:!0,dots:!1},1000:{items:3,autoWidth:!1}}}),$(".service-carousel-one").length&&$(".service-carousel-one").owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:1,autoWidth:!1},600:{items:2,autoWidth:!1},1000:{items:3,autoWidth:!1}}}),$(".single-service-carousel").length&&$(".single-service-carousel").owlCarousel({loop:!0,margin:6,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!0,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1,autoWidth:!1},480:{items:1,autoWidth:!1},600:{items:2,autoWidth:!1},1000:{items:2,autoWidth:!1}}}),$(".brand-carousel").length&&$(".brand-carousel").owlCarousel({loop:!0,margin:90,nav:!1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:!1,autoWidth:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,responsive:{0:{items:1},480:{items:2},600:{items:4},1000:{items:5}}})}function galleryMasonaryLayout(){if($(".masonary-layout").length&&$(".masonary-layout").isotope({layoutMode:"masonry"}),$(".post-filter").length){var t=$(".post-filter li");t.children("span").on("click",function(){var a=$(this),e=a.parent().attr("data-filter");return t.children("span").parent().removeClass("active"),a.parent().addClass("active"),$(".filter-layout").isotope({filter:e,animationOptions:{duration:500,easing:"linear",queue:!1}}),!1})}$(".post-filter.has-dynamic-filter-counter").length&&$(".post-filter.has-dynamic-filter-counter").find("li").each(function(){var t=$(this).data("filter"),a=$(".gallery-content").find(t).length;$(this).children("span").append('<span class="count"><b>'+a+"</b></span>")})}function thmbxSlider(){$(".btc-static-ticker-slider").length&&$(".btc-static-ticker-slider").bxSlider({minSlides:1,maxSlides:7,slideWidth:270,slideMargin:10,useCSS:!1,ticker:!0,autoHover:!0,tickerHover:!0,speed:1e5,infiniteLoop:!0})}function stickyHeader(){if($(".stricky").length){var t=$(".stricky");$(window).scrollTop()>100?(t.removeClass("slideIn animated"),t.addClass("stricky-fixed slideInDown animated"),$(".scroll-to-top").fadeIn(500)):$(this).scrollTop()<=100&&(t.removeClass("stricky-fixed slideInDown animated"),t.addClass("slideIn animated"),$(".scroll-to-top").fadeOut(500))}}function thmLightBox(){if($(".img-popup").length){var t={};$(".img-popup").each(function(){var a=parseInt($(this).attr("data-group"),10);t[a]||(t[a]=[]),t[a].push(this)}),$.each(t,function(){$(this).magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,gallery:{enabled:!0}})})}}function thmCounter(){$(".counter").length&&$(".counter").counterUp({delay:10,time:3e3})}function thmScrollAnim(){$(".wow").length&&new WOW({mobile:!1}).init()}function contactFormValidation(){$(".contact-form").length&&$(".contact-form").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0},subject:{required:!0}},submitHandler:function(t){return $.post($(t).attr("action"),$(t).serialize(),function(a){$(t).parent().find(".result").append(a),$(t).find('input[type="text"]').val(""),$(t).find('input[type="email"]').val(""),$(t).find("textarea").val(""),console.log(a)}),!1}})}function thmVideoPopup(){$(".video-popup").length&&$(".video-popup").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1})}function scrollToTarget(){$(".scroll-to-target").length&&$(".scroll-to-target").on("click",function(){var t=$(this).attr("data-target");return $("html, body").animate({scrollTop:$(t).offset().top},1e3),!1})}function mobileNavToggle(){$("#main-nav-bar .navbar-nav .sub-menu").length&&($("#main-nav-bar .navbar-nav .sub-menu").parent("li").children("a").append(function(){return'<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'}),$("#main-nav-bar .navbar-nav .sub-nav-toggler").on("click",function(){return $(this).parent().parent().children(".sub-menu").slideToggle(),!1}))}function handlePreloader(){$(".preloader").length&&($("body").removeClass("active-preloader-ovh"),$(".preloader").fadeOut())}function bootstrapAnimatedLayer(){function t(t){t.each(function(){var t=$(this),a=t.data("animation");t.addClass(a).one("webkitAnimationEnd animationend",function(){t.removeClass(a)})})}var a=$("#minimal-bootstrap-carousel"),e=a.find(".item:first").find("[data-animation ^= 'animated']");a.carousel({interval:7e3}),t(e),a.carousel("pause"),a.on("slide.bs.carousel",function(a){t($(a.relatedTarget).find("[data-animation ^= 'animated']"))})}function pogressbarAnim(){$(".single-progress-bar .pogress-wow").length&&new WOW({boxClass:"pogress-wow",animateClass:"animated",mobile:!0}).init()}function searchPopup(){$(".popup-with-zoom-anim").length&&$(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"})}function sideNavToggler(){$(".side-navigation").length&&($(".side-nav-opener").on("click",function(){return $(".side-navigation").addClass("open"),!1}),$(".side-navigation-close-btn").on("click",function(){return $(".side-navigation").removeClass("open"),!1}))}function countDownTimer(){$(".countdown-box").length&&$(".countdown-box").each(function(){var t=$(this),a=t.data("countdown-time");t.countdown(a,function(t){$(this).html('<li> <div class="box"> <h4>'+t.strftime("%D")+'</h4> <span>Days</span> </div> </li> <li> <div class="box"> <h4>'+t.strftime("%H")+'</h4> <span>Hours</span> </div> </li> <li> <div class="box"> <h4>'+t.strftime("%M")+'</h4> <span>Minutes</span> </div> </li> <li> <div class="box"> <h4>'+t.strftime("%S")+"</h4> <span>Seconds</span> </div> </li> ")})})}jQuery(document).on("ready",function(){jQuery,thmMailchimp(),thmLightBox(),thmCounter(),contactFormValidation(),scrollToTarget(),thmVideoPopup(),accrodion(),mobileNavToggle(),bootstrapAnimatedLayer(),searchPopup(),sideNavToggler(),countDownTimer()}),jQuery(window).on("load",function(){jQuery,handlePreloader(),galleryMasonaryLayout(),pogressbarAnim(),thmbxSlider(),thmOwlCarousel()}),jQuery(window).on("scroll",function(){jQuery,stickyHeader()});
