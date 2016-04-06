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

  /**
   * When been redirect to the team page we can focus on a specific member.
   *
   * The function check if we have a query string that matches
   * e.g: 'team/?member=github_account_name'. then we will auto scroll to the
   * member and display his info as well.
   *
   */
  function focusOnMember() {

    var $teamPage = $('#team-page');
    // Return early if we are not on the team page.
    if (!$teamPage.length) {
      return;
    }

    // Getting the target member.
    var memberName = '#' + location.search.split('member=')[1];
    var $member = $(memberName);

    // Return early if member isn't found.
    if (!$member.length) {
      return;
    }

    // Scroll to member.
    $('html, body').animate({
      scrollTop: $(memberName).offset().top
    }, 800);

    // Display the member info.
    $member.find('.popup-block').fadeIn()
  }

  // Scroll to a member when been redirect to the team page from a member link.
  focusOnMember();

  // In case we have a devices that support touch.
  if (is_touch_device()) {
    // Adding touch class to the body tag if it's a touch device.
    $('body').addClass('is-touch-device');

    // Toggle the member 'info' block to 'fade in'/'fade out' on each touch.
    teamMemberInfoOnTouch();
  }
  // In case we have a devices that doesn't support touch.
  else {
    clientsLogosOnHover();
    teamMemberInfoOnHover();
  }

});
