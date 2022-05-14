$(function () {
  $(".catecory_item > a").on("mouseenter", function () {
    $(this).siblings(".sub_layer").show();
  });
  $(".category_wrap_inner > li").on("mouseleave", function () {
    $(this).find(".sub_layer").hide();
  });

  var thumbs = new Swiper(".swiper_nav", {
    slidesPerView: 9,
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loopedSlides: 1,
  });
  var galleryTop = new Swiper(".swiper_main", {
    loop: true,
    loopedSlides: 1,
    navigation: {
      nextEl: ".swiper_main .main_btn.next",
      prevEl: ".swiper_main .main_btn.prev",
    },
    thumbs: {
      swiper: thumbs,
    },
  });

  // header swiper
  var swiper_nav = new Swiper(".brand_wrap", {
    fadeEffect: { crossFade: true },
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".brand_wrap .swiper-button-prev",
      prevEl: ".brand_wrap .swiper-button-next",
    },
    pagination: {
      el: ".brand_wrap .swiper-pagination",
      type: "fraction",
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
  });

  // benefit section swiper
  var benefitSwiper = new Swiper(".sc_benefits .typeA", {
    cssMode: true,
    loop: true,
    loopedSlides: 1,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: ".sc_benefits .swiper-button-next",
      prevEl: ".sc_benefits .swiper-button-prev",
    },
    pagination: {
      el: ".sc_benefits .swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    observer: true,
    observeParents: true,
  });

  // chance section swiper
  var swiper2 = new Swiper(".sc_chance .cnt_wrap", {
    fadeEffect: { crossFade: true },
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".sc_chance .swiper-button-prev",
      prevEl: ".sc_chance .swiper-button-next",
    },
    pagination: {
      el: ".sc_chance .swiper-pagination",
      type: "fraction",
    },
    observer: true,
    observeParents: true,
  });

  // recommend section swiper
  var swiper3 = new Swiper(".sc_recommend .cnt_wrap", {
    fadeEffect: { crossFade: true },
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: ".sc_recommend .swiper-button-prev",
      prevEl: ".sc_recommend .swiper-button-next",
    },
    pagination: {
      el: ".sc_recommend .swiper-pagination",
      type: "fraction",
    },
    observer: true,
    observeParents: true,
  });

  // store section swiper
  var swiper4 = new Swiper(".sc_store .cnt_swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".sc_store .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sc_store .swiper-button-next",
      prevEl: ".sc_store .swiper-button-prev",
    },
  });

  // gsbrand section swiper
  var swiper5 = new Swiper(".sc_gsbrand .cnt_swiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".sc_gsbrand .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".sc_gsbrand .swiper-button-next",
      prevEl: ".sc_gsbrand .swiper-button-prev",
    },
  });

  // best tab
  $(".sc_best .category_tab li").on("click", function (e) {
    e.preventDefault();

    var idx = $(this).index();
    console.log(idx);
    $(this).addClass("on").siblings().removeClass("on");
    $(".sc_best .cnt_swiper").show().eq(idx).siblings().hide();
  });

  // top button
  moveBtnTop();

  function moveBtnTop() {
    var btnTop = $(".util_wrap #top");

    // 탑버튼 페이지상단이동
    btnTop.on("click", function (e) {
      e.preventDefault();

      $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $(window).scroll(function () {});
  }
});
