//mobile handler without resize 
var imMobile = function(){
  var $hamburger = $('.hamburger');
  if ($hamburger.css('display') === 'block') {
    return true;
  }
  return false;
} 

  // nav bar on click for changing the active link and set content
  $(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      if (imMobile()) {
        $('.jmk__section--head-area').toggleClass('active-menu');
        $('.hamburger').toggleClass('is-active');
      }

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

    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.jmk__section--head-area').toggleClass('active-menu');
    });
  });


