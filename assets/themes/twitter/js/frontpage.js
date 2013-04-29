jQuery(document).ready(function($) {

  $(".scroll").click(function(event){

    // Split the hash form the "#".
    var target = this.hash.split("#");
    target = target[1];

    // Get the top offset of the target anchor
    var $targetTop = $('a[name=' + target + ']').offset().top - 100;
    console.log($targetTop);

    event.preventDefault();
    $('html,body').animate({scrollTop: $targetTop}, 500);
  });
});