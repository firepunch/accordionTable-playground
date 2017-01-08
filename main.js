$(function() {
  var $list = $('.list');
  $list.find("tr").not('.row').hide();
  $list.find("tr").eq(0).show();
  $list.find(".row").click(function() {
    $(this).fadeTo("fast", 1);
    $list.find('.row').not(this).siblings().fadeOut(500);
    $(this).siblings().fadeToggle(500);
    $(this).addClass('active');
    $list.find('.row').not(this).removeClass('active');
    $list.find('.row').not(this).hover(function() {
        $(this).fadeTo("fast", 1);
      },
      function() {
        $(this).fadeTo("fast", 0.33);
      });
  });
});