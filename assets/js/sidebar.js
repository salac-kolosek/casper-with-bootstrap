$(document).ready(function() {
  const sidebar = $('.sidebar-container');
  const footer = $('.footer')

  $(window).scroll(function() {
    var endSiderbar = $(sidebar).offset().top + $(sidebar).height();
    var startFooter = $(footer).offset().top;
    var scrollTop = $(window).scrollTop();

    if(scrollTop + 800 >= startFooter) {
      $(sidebar).hide();
    } else {
      $(sidebar).show();
    }
  });
});