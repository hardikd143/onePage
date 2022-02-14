$(document).ready(() => {
  $(".owlslider").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });

  // directcontact section
  $(".directcontact .fa-arrow-alt-circle-down").click(function () {
    let icon = $(this)[0];

    $(this).toggleClass("hidePREV");
    let directcontent = $(icon).prev()[0];
    if ($(this).hasClass("hidePREV")) {
      $(directcontent).css({ height: directcontent.scrollHeight + "px" });
      $(this)
        .removeClass("fas fa-arrow-alt-circle-down")
        .addClass("far fa-times-circle");
    } else {
      $(directcontent).css({ height: "2px" });
      $(this)
        .addClass("fas fa-arrow-alt-circle-down")
        .removeClass("far fa-times-circle");
    }
  });

  setTimeout(() => {
    $(".doContact").css({ display: "inline-block" });
  }, 10000);

  // doContact toast
  const doContClose = () => {
    $(".doContact").css({ display: "none" });
  };

  $(".doContactclose").click(() => {
    doContClose();
  });
  $(".doContact a[href='#contact']").click(() => {
    doContClose();
  });
  // on scrollbtn
  $(window).on("scroll", () => {
    let scrolled = $(window).scrollTop();
    // social media
    if (scrolled >= 1200) {
      $(".social-media-wrapper").css({ transform: "translateX(-50px)" });
    } else {
      $(".social-media-wrapper").css({ transform: "translateX(0px)" });
    }

    // scroll button
    if (scrolled >= 750) {
      $(".scrollbtn").css({
        display: "grid",
      });
    } else {
      $(".scrollbtn").css({
        display: "none",
      });
    }

    // nav background
    if (scrolled >= 60) {
      $("nav")
        .addClass("navbar-dark bg-dark")
        .removeClass("navbar-light bg-white");
    } else {
      $("nav")
        .addClass("navbar-light bg-white")
        .removeClass("navbar-dark bg-dark");
    }
  });
  $(".scrollbtn").click(() => {
    $(window).scrollTop("0");
  });

  // animation for section  on scroll
  $(window).on("scroll", () => {
    let scrolled = $(window).scrollTop();
    let windowheight = window.outerHeight;
    let directcontoffset = $(".directcontact")[0].offsetTop;
    let contformoffset = $(".contactform")[0].offsetTop;
    //  directcontact  section animation
    if (scrolled >= directcontoffset - windowheight) {
      $(".directcontact").css({ transform: "translateY(0px)" });
    } else {
      $(".directcontact").css({ transform: "translateY(100px)" });
    }
    //  contactform  section animation
    if (scrolled >= contformoffset - windowheight) {
      $(".contactform").css({ transform: "translateY(0px)" });
    } else {
      $(".contactform").css({ transform: "translateY(60px)" });
    }

    // about scetion animation
    for (let i = 0; i < 2; i++) {
      let aboutdiv = $("#about .aboutdiv")[i];
      let aboutdivoffset = aboutdiv.offsetTop;

      if (scrolled >= aboutdivoffset - windowheight) {
        $(aboutdiv).css({ transform: "translateY(0px)" });
      } else {
        $(aboutdiv).css({ transform: "translateY(40px)" });
      }
    }
    // cards animation
    for (let i = 0; i < $("#services .card").length; i++) {
      let card = $("#services .card")[i];
      let cardoffset = card.offsetTop;

      if (scrolled >= cardoffset - windowheight) {
        $(card).css({ opacity: 1, transform: "translateY(0px)" });
      } else {
        $(card).css({ opacity: 0.5, transform: "translateY(40px)" });
      }
    }
  });

  // footer theme changer
  $(".footersection .fa-sun").click(function () {
    let icon = $(this)[0];
    $(icon).toggleClass("darkfooter");

    if ($(icon).hasClass("darkfooter")) {
      $(".footersection").addClass("bg-dark text-white");
      $("footer a").attr("style", "color:#ffffff !important");
      $(".footermode").text("Light");
    } else {
      $(".footersection").removeClass("bg-dark text-white");
      $("footer a").attr("style", "color:#212529 !important");
      $(".footermode").text("Dark");
    }
  });

  // active link in nav
  const navactive = (e) => {
    for (let i = 0; i < $(".navbar-collapse a.nav-link").length; i++) {
      let tag = $(".navbar-collapse a.nav-link")[i];
      $(tag).removeClass("active");
    }

    $('a[href="#' + e + '"]').addClass("active");
  };
  // active section on scroll
  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    // offsets of sections
    let homeoff = 0;
    let aboutoff = $("#about")[0].offsetTop - 1;
    let servicesoff = $("#services")[0].offsetTop - 1;
    let contactoff = $("#contact")[0].offsetTop - 1;
    if (scrolled >= homeoff && scrolled < aboutoff) {
      navactive("home");
    }
    if (scrolled >= aboutoff && scrolled < servicesoff) {
      navactive("about");
    }
    if (scrolled >= servicesoff && scrolled < contactoff) {
      navactive("services");
    }
    if (scrolled >= contactoff) {
      navactive("contact");
    }
  });

  // subscription duration
  $(".subs-duration input").click(function () {
    let input = $(this)[0];
    let duration = $(input).attr("id");
    if (duration === "yearly") {
      for (let i = 0; i < $(".price").length; i++) {
        let span = $(".price span")[i];
        let price = $(span).attr("data-year");
        $(span).text(price);
      }
    } else {
      for (let i = 0; i < $(".price").length; i++) {
        let span = $(".price span")[i];
        let price = $(span).attr("data-month");
        $(span).text(price);
      }
    }
  });

  // FAQ
  $(".QNAs .question").click(function () {
    let que = $(this)[0];
    $(que).toggleClass("showANS");
    let ans = $(que).next()[0];
    let icon = $(que).children()[1];
    // p-2 py-3
    if ($(que).hasClass("showANS")) {
      $(icon).css({ transform: "rotateX(180deg)" });
      $(ans).css({ height: ans.scrollHeight + "px" });
    } else {
      $(icon).css({ transform: "rotateX(0deg)" });
      $(ans).css({ height: "0px" });
    }
  });

  // memberinfo width
  for (let i = 0; i < $(".member").length; i++) {
    let memberdiv = $(".member")[i];
    let width = $(memberdiv).css("width");
    let memberinfo = $(memberdiv).children()[1];
    $(memberinfo).css("width", width);
  }
  $(window).on("resize", function () {
    for (let i = 0; i < $(".member").length; i++) {
      let memberdiv = $(".member")[i];
      let width = $(memberdiv).css("width");
      let memberinfo = $(memberdiv).children()[1];
      $(memberinfo).css("width", width);
    }
  });
  

  // members information object
  let members = [
    {
      profile: "./images/team-mem1.jpg",
      name: "JonasKahnwald",
      profession: "IosDeveloper",
      email: "jonas123@gmail.com",
      mobile: "+1210-503-0206",
    },
    {
      profile: "./images/team-mem2.jpg",
      name: "CharlotteDoppler",
      profession: "JavaDeveloper",
      email: "charlotte85@gmail.com",
      mobile: "+1582-302-7327",
    },
    {
      profile: "./images/team-mem3.jpg",
      name: "BartoszTiedemann",
      profession: "BackendDeveloper",
      email: "bartiedemann@gmail.com",
      mobile: "+1210-965-9290",
    },
    {
      profile: "./images/team-mem4.jpg",
      name: "MarthaNielsen",
      profession: "FtontendDeveloper",
      email: "marthaN147@gmail.com",
      mobile: "+1582-222-7597",
    },
    {
      profile: "./images/team-mem5.jpg",
      name: "MagnusNielsen",
      profession: "DatabaseAdministrator",
      email: "MagNielsen28@gmail.com",
      mobile: "+1231-494-6434",
    },
    {
      profile: "./images/team-mem6.jpg",
      name: "KatharinaNielsen",
      profession: "FUllstackDeveloper",
      email: "katNie1593@gmail.com",
      mobile: "+1582-302-7327",
    },
  ];

  $(".memberMorebtn").click(function () {
    let memberNum = $($(this).parent().parent()[0]).attr("data-member");
    let mi = members[memberNum];
    $(".member_Profile").attr("src", mi.profile);
    $(".member_Name").text(mi.name);
    $(".member_Work").text(mi.profession);
    $(".member_Email").text(mi.email);
    $(".member_Mobile").text(mi.mobile);
    $(".memberinfomodal").css({ display: "grid" });
  });

  $(".memberinfomodal .modal-header .btn-close").click(function () {
    $(".memberinfomodal").css({ display: "none" });
  });
  // select2
  $(".myselect").select2({
    theme: "classic",
    tags: true,
    // minimumResultsForSearch: Infinity,
    width:'250px',
    scrollAfterSelect:true,
  });
  $(".myselect-Multi").select2({
    placeholder: 'Select cities you visited',
    allowClear: true,
    maximumSelectionLength: 3,
    tags: true,
    // disabled:true,
  });
});
