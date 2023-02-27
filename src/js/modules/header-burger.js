$(document).ready(function () {
  $(".burger").click(function (event) {
    $(".header,.menu-header,.burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.menu-header__link,.logo').click(function (event) {
    $(".header,.menu-header,.burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
