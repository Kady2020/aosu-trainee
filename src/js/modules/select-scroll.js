$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.form').addClass('scroll-form');
  }
  else {
    $('.form').removeClass('scroll-form');
  }
});
