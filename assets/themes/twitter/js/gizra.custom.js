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

    // Make sure the fragment is updated in the URL.
    history.pushState(null, '', '#' + target);
    $('html,body').animate({scrollTop: $targetTop}, 500);
  }

  $(".scroll").click(function(event){
    gizra.scrollTop(this);
    event.preventDefault();
  });

  gizra.scrollTop(window.location);


  ////////// Back to Top //////////
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });


  // Flexslider.
  $(window).load(function(){

    $('.flexslider').flexslider({
      animation: "slide",
      slideshow: true,
      start: function(slider){
        $('body').removeClass('loading');
      }
    });
  });

  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    $('.section2').backstretch("/assets/themes/twitter/images/about-background.jpg");
    $('.section4').backstretch("/assets/themes/twitter/images/about2-background.jpg");
  }


});
