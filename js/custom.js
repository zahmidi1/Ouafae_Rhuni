// ------------------------------------------------
// Project Name: Finley Template
// Project Description: Finley - Stylish HTML Template for Creative Projects
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.0
// Build Date: May 2023
// Last Update: May 2023
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Main Section Loading Animation
//  2. KBW-Countdown
//  3. Vegas Kenburns
//  4. Skillbars
//  5. Magnific Popup
//  6. Mailchimp Notify Form
//  7. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function () {
  "use strict";

  // --------------------------------------------- //
  // Loader & Main Section Loading Animation Start
  // --------------------------------------------- //
  $(".loader__logo").addClass("scaleOut");

  setTimeout(function () {
    $(".loader").addClass("loaded");
  }, 500);

  setTimeout(function () {
    $("#main").addClass("animate-in");
  }, 1000);

  setTimeout(function () {
    $("#header").addClass("animate-in");
  }, 2000);
  // --------------------------------------------- //
  // Loader & Main Section Loading Animation End
  // --------------------------------------------- //
});

$(function () {
  "use strict";

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $("#bgndKenburns");
  if (bgndKenburns.length) {
    bgndKenburns.vegas({
      timer: false,
      delay: 10000,
      transition: "fade2",
      transitionDuration: 2000,
      slides: [
        { src: "./img/portfolio/IMG-20240930-WA0025.jpg" },
        { src: "./img/portfolio/IMG-20240930-WA0026.jpg" },
        { src: "./img/portfolio/IMG-20240930-WA0025.jpg" },
      ],
      animation: [
        "kenburnsUp",
        "kenburnsDown",
        "kenburnsLeft",
        "kenburnsRight",
      ],
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $("#inner-video-trigger").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function () {
        $("body").addClass("overflow-hidden");
      },
      close: function () {
        $("body").removeClass("overflow-hidden");
      },
    },
  });
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $(".notify-form").ajaxChimp({
    callback: mailchimpCallback,
    url: "https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900",
  });

  function mailchimpCallback(resp) {
    if (resp.result === "success") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-ok").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-ok").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    } else if (resp.result === "error") {
      $(".notify").find(".form").addClass("is-hidden");
      $(".notify").find(".subscription-error").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $(".notify").find(".subscription-error").removeClass("is-visible");
        $(".notify").find(".form").delay(300).removeClass("is-hidden");
        $(".notify-form").trigger("reset");
      }, 5000);
    }
  }
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      $("#contact").find(".form").addClass("is-hidden");
      $("#contact").find(".reply-group").addClass("is-visible");
      setTimeout(function () {
        // Done Functions
        $("#contact").find(".reply-group").removeClass("is-visible");
        $("#contact").find(".form").delay(300).removeClass("is-hidden");
        th.trigger("reset");
      }, 5000);
    });
    return false;
  });

  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //
});


const contactTrigger = $("#contact_trigger");
const worksTrigger = $("#works_trigger");
const aboutTrigger = $("#about_trigger");
const header = $("#header");
const menu = $("#nav");
const menuTrigger = $("#menu-trigger");

contactTrigger.on("click", function (event) {
  menuTrigger.removeClass("menu-opened");
  menu.addClass("animate-out");
  setTimeout(function () {
    header.removeClass("menu-is-visible");
    $(".active").addClass("animate-in");
  }, 1000);
  setTimeout(function () {
    $("body").removeClass("overflow-hidden");
    menu.removeClass("animate-in animate-out");
    if ($(".inner").hasClass("active")) {
      header.addClass("inner-is-visible");
    }
  }, 1000);
  setTimeout(function () {
    header.addClass("inner-is-visible");
    document.getElementById("contactLink").scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);
});

worksTrigger.on("click", function (event) {
  menuTrigger.removeClass("menu-opened");
  menu.addClass("animate-out");
  setTimeout(function () {
    header.removeClass("menu-is-visible");
    $(".active").addClass("animate-in");
  }, 1000);
  setTimeout(function () {
    $("body").removeClass("overflow-hidden");
    menu.removeClass("animate-in animate-out");
    if ($(".inner").hasClass("active")) {
      header.addClass("inner-is-visible");
    }
  }, 1000);
  setTimeout(function () {
    header.addClass("inner-is-visible");
    document.getElementById("worksLink").scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);
});

aboutTrigger.on("click", function (event) {
  menuTrigger.removeClass("menu-opened");
  menu.addClass("animate-out");
  setTimeout(function () {
    header.removeClass("menu-is-visible");
    $(".active").addClass("animate-in");
  }, 1000);
  setTimeout(function () {
    $("body").removeClass("overflow-hidden");
    menu.removeClass("animate-in animate-out");
    if ($(".inner").hasClass("active")) {
      header.addClass("inner-is-visible");
    }
  }, 1000);
  setTimeout(function () {
    header.addClass("inner-is-visible");
    document.getElementById("aboutLink").scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);
});
