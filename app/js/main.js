$(function() {

  // About-story images.
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch("/assets/images/about-story/lamp.jpg");
    $('.section4').backstretch("/assets/images/about-story/fish.jpg");
  }
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
