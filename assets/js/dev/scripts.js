$(document).ready(function() {
// Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
  // Mobile Menu Funcation
  $(".open-menu").on('click touch', function() {
    $('.site-wrapper').toggleClass('show');
  });
  // PNG LOGO FALLBACK FOR OLD BROWSERS
  if (!Modernizr.svg) {
    $(".site-name.logo img").attr("src", "/assets/images/logo.png");
  }

  // Header image
  $.getJSON('/headers.json').done(function(data){
      var random = data.data[Math.floor(Math.random() * data.data.length)];
      $(".header-wrapper").backstretch(random.header);
  });

});
