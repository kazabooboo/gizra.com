$(function() {

  // About-story images.
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch("/assets/images/about-story/lamp.jpg");
    $('.section4').backstretch("/assets/images/about-story/fish.jpg");
  }

  // Smooth scroll.

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Popup div instead logos.
$(document).ready(function(){
  $(".clients li").has('.popup-block').hoverIntent(function(){

      $(this).find('img').fadeOut();
      $(this).find('.popup-block').fadeIn();
    }, function(){
      $(this).find('.popup-block').fadeOut();
      $(this).find('img').fadeIn();
    }
  )

  $(".member-box").has('.popup-block').hoverIntent(function(){
    $(this).find('.popup-block').fadeIn();
    }, function(){
    $(this).find('.popup-block').fadeOut();
    }
  )
});

// Popup div instead logos.
$(document).ready(function(){
  $(".clients li").has('.popup-block').hoverIntent(

    function(){
      $(this).find('img').fadeOut();
      $(this).find('.popup-block').fadeIn();
    },

    function(){
      $(this).find('.popup-block').fadeOut();
      $(this).find('img').fadeIn();
    }

  )
});
