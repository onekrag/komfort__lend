$(document).ready(function () {


  // ======================    Menu    ==========================




  $('.header__burger').click(function (event) {
    $('.header__burger,.top__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  // $('#about,#price,#we,#portfolio,#reviews,#contacts').click(function (event) {
  //   $('.top__mehu').removeClass('active');
  // });

  $('.top__menu').click(function (event) {
    $('.header__burger,.top__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });



  // ======================    Popap    ==========================



  $('.popup-open').click(function () {
    $('.popup__fade').fadeIn();
    return false;
  });

  $('.popup__close').click(function () {
    $(this).parents('.popup__fade').fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.popup__fade').fadeOut();
    }
  });

  $('.popup__fade').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });


  // ======================    Наше портфолио    ==========================

  $('#potfolio__hidde1').click(function (event) {
    $('.portfolio__hidden1').addClass('portfolio__active');
    $('.portfolio__hidden2, .portfolio__hidden3').removeClass('portfolio__active');
  });
  $('#potfolio__hidde2').click(function (event) {
    $('.portfolio__hidden2').addClass('portfolio__active');
    $('.portfolio__hidden1, .portfolio__hidden3').removeClass('portfolio__active');
  });
  $('#potfolio__hidde3').click(function (event) {
    $('.portfolio__hidden3').addClass('portfolio__active');
    $('.portfolio__hidden2, .portfolio__hidden1').removeClass('portfolio__active');
  });


  // ======================    Что о нас говорят    ==========================

  // $('.reviews__slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   centerMode: true,
  //   centerPadding: '400px',
  //   mobileFirst: true
  // });



});