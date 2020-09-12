  $("a").click(function(e){
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500);
    e.preventDefault(); //this is the important line.
});