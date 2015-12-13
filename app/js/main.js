$(function() {

  // About-story images.
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch("/assets/images/about-story/lamp.jpg");
    $('.section4').backstretch("/assets/images/about-story/fish.jpg");
  }
});

$(document).ready(function(){
  // Check if the current device support touch.
  function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }

  // In case we are on a "mobile" device.
  if (is_touch_device()) {

    // Display an info icon overlaying the member image.
    $('#team-page .icon-info').show();

    // Toggle the member "info" block to "fade in"/"fade out" on each touch.
    $("#team-page .member-box .icon-info").bind( "touchstart", function() {
      $(this).parent('.member-box').find('.popup-block').fadeToggle( "slow", "linear" );
    });
  }
  // In case we are on "desktop" device.
  else {
    // Display the client "info" block.
    $("#work .clients li").has('.popup-block').hoverIntent(
      // While hovering the target element.
      function(){
        $(this).find('img').fadeOut();
        $(this).find('.popup-block').fadeIn();
      },
      // After we stop to hover over the target element.
      function(){
        $(this).find('.popup-block').fadeOut();
        $(this).find('img').fadeIn();
      }
    )

    // Display the member info block once("hoverIntent")
    // only while hovering the member image.
    $("#team-page .member-box").has('.popup-block').hoverIntent(
      // While hovering the target element.
      function(){
        $(this).find('.popup-block').fadeIn();
      },
      // After we stop to hover over the target element.
      function(){
        $(this).find('.popup-block').fadeOut();
      }
    )
  }
});
