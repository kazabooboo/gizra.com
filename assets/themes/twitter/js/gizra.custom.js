jQuery(document).ready(function($) {

  gizra = {};

  gizra.scrollTop = function(url) {
    if (!url.hash) {
      return;
    }

    var target = url.hash.split("#");
    target = target[1];

    // Get the top offset of the target anchor
    var $targetTop = $('#' + target).offset().top - 120;
    console.log($targetTop);

    // Make sure the fragment is updated in the URL.
    history.pushState(null, '', '#' + target);
    $('html,body').animate({scrollTop: $targetTop}, 500);
  }

  $(".scroll").click(function(event){
    gizra.scrollTop(this);
    event.preventDefault();
  });

  gizra.scrollTop(window.location);
});