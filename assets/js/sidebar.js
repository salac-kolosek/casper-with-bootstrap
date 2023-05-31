$(document).ready(function() {
  const sidebar = $('.sidebar-container');
  const footer = $('.footer')

  $(window).scroll(function() {
    var endSiderbar = $(sidebar).offset().top + $(sidebar).height();
    var startFooter = $(footer).offset().top;
    var scrollTop = $(window).scrollTop();
    var screenWidth = $(window).width();

    if(scrollTop + 800 >= startFooter || screenWidth < 1650) {
      $(sidebar).hide();
    } else {
      $(sidebar).show();
    }
  });
});