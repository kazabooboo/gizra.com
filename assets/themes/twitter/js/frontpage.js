jQuery(document).ready(function($) {

  $(".scroll").click(function(event){
    // Split the hash form the "#".
    var target = this.hash.split("#");
    target = target[1];

    // Get the top offset of the target anchor
    var $targetTop = $('a[name=' + target + ']').offset().top - 120;

    event.preventDefault();

    // Make sure the fragment is updated in the URL.
    history.pushState(null, '', '#' + target);
    $('html,body').animate({scrollTop: $targetTop}, 500);
  });

  if (window.location.hash) {
    var target = window.location.hash.split("#");
    target = target[1];
    $('header a[href$="'+ target + '"]').trigger('click');
  }
});