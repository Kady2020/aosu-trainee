$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.form').addClass('scroll-form');
  }
  else {
    $('.form').removeClass('scroll-form');
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('.select-content').addClass('select-content_scroll');
  }
  else {
    $('.select-content').removeClass('select-content_scroll');
  }
});
