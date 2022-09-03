const duration = 500;

$('#BtnRight').click(function () {
    $('#Rocket').stop(true, false).animate({
        left: '+=200'
    }, duration, 'easeInBounce')
});

$('#BtnLeft').click(function () {
    $('#Rocket').stop(true, false).animate({
        left: '-=200'
    }, duration, 'easeInBounce')
});

