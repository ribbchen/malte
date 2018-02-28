
  
  // nav bar on click for changing the active link and set content
  $(document).ready(function() {
    $('a[href^="#"]').on("click", function(event) {
      $('.active-link').removeClass('active-link');
      $(this).addClass('active-link');
      var target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        var activeClass='jmk__slide--active';
        $('.jmk__slide--active').removeClass(activeClass);
        $(target).addClass(activeClass);
      }
    });
  });
