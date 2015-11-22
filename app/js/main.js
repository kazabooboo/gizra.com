$(function() {

  // Popup div instead logo
  var main = $('.logo.popup .main-block');
  var popup = $('.logo.popup .popup-block');
  $('.logo.popup').hover(
    function(){
      main.fadeOut();
      popup.fadeIn();
    }, function(){
      popup.fadeOut();
      main.fadeIn();
    }
  );
  // Homepage slideshow.
  $('.parallax-scene').parallax();

  // About-story images.
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch("/assets/images/about-story/lamp.jpg");
    $('.section4').backstretch("/assets/images/about-story/fish.jpg");
  }
});
