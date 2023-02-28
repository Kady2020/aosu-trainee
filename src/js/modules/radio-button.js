$(document).ready(function () {
  $.each($('.select-content__radio'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $(document).on('click', '.select-content__radio', function (event) {
    $(this).parents('.radio').find('.radio__item').removeClass('active');
    $(this).parents('.radio').find('.radio__item input').prop('checked', false);
    $(this).toggleClass('active');
    $(this).find('input').prop('checked', true);
    return false;
  });
});
