function cycleImages() {
    var $active = $('#cycler .active');
    var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#cycler img').not('.base').first();
    $next.css('z-index', 2); //move the next image up the pile
    $active.fadeOut(1500, function() { //fade out the top image
        $active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active'); //make the next image the top one
    })
}
$(document).ready(function() {
    $('#cycler img.base').clone().prependTo('#cycler');
    $('#cycler img.base').last().removeClass('base').addClass('active');
    $('#cycler img').show();
    // run every 4s
    setInterval('cycleImages()', 4000);
});
