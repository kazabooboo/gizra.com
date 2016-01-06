$(function() {
  // About-story images.
  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch('/assets/images/about-story/lamp.jpg');
    $('.section4').backstretch('/assets/images/about-story/fish.jpg');
  }
});

$(document).ready(function(){

  /**
   * Smooth scroll.
   *
   */
  $('a.smooth-scroll-to').click(function(event) {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 800);
    event.preventDefault();
  });

  /**
   * Check if the current device support touch.
   *
   */
  function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }

  /**
   * Touch handler function for the "clients" logos on the homepage.
   *
   */
  var clientsLogosOnTouch = function() {
    var selectorsList = '.popup-block, img';

    // Current logo being touch.
    var $targetLogo = $(this);

    // Hide previous open logo as long as we are not pointing to our self.
    var $openLogo = $('#work .clients .logo .popup-block:visible').parent('.logo');
    if ($openLogo.length && $openLogo[0] !== $targetLogo[0]) {
      $openLogo.find(selectorsList).fadeToggle('fast', 'linear')
    }

    // Toggle the selected logo.
    $targetLogo.find(selectorsList).fadeToggle('fast', 'linear');
  }

  /**
   * No touch handler function for the "clients" logos on the homepage.
   *
   */
  function clientsLogosOnHover() {
    // Display the client 'info' block.
    $('#work .clients li').has('.popup-block').hoverIntent(
      // While hovering the target element.
      function(){
        $(this).find('.popup-block, img').fadeToggle('fast', 'linear');
      },
      // After we stop to hover over the target element.
      function(){
        $(this).find('.popup-block, img').fadeToggle('fast', 'linear');
      }
    )
  }

  /**
   * Touch handler for the team "member" on the team page.
   *
   */
  function teamMemberInfoOnTouch()  {

    // Toggle the member 'info' block to 'fade in'/'fade out' on each touch.
    $('#team-page .member-box').bind( 'touchstart', function() {

      //Hide previous open member info.
      $('#team-page .member-box .popup-block:visible').fadeToggle('fast', 'linear');

      //Toggle the selected logo.
      $(this).find('.popup-block').fadeToggle('fast', 'linear');
    })

  }

  /**
   * No touch handler for the team "member" on the team page.
   *
   */
  function teamMemberInfoOnHover()  {
    // Display the member info block once('hoverIntent')
    // only while hovering the member image.
    $('#team-page .member-box').has('.popup-block').hoverIntent(
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

  // In case we have a devices that support touch.
  if (is_touch_device()) {
    // Adding touch class to the body tag if it's a touch device.
    $('body').addClass('is-touch-device');

    // Toggle the member 'info' block to 'fade in'/'fade out' on each touch.
    teamMemberInfoOnTouch();

    // Toggle the client 'info' block to 'fade in'/'fade out' on each touch.
    $('#work .clients .logo').bind( 'touchstart', clientsLogosOnTouch)
  }
  // In case we have a devices that doesn't support touch.
  else {
    clientsLogosOnHover();
    teamMemberInfoOnHover();
  }

});
