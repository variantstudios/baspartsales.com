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

  $('.header-wrapper .menu').slicknav({
    label: '',
    duration: 1000,
    prependTo:'.nav-wrap',
    allowParentLinks: true
  });

});
