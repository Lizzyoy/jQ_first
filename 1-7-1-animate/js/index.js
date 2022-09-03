const timer = 5000;

$('#BtnRight').click(()=>{
    $('#Rocket').animate({
        left: 1000,
        top: 100
    }, timer);
});

$('#BtnLeft').click(()=>{
    $('#Rocket').animate({
        left: 0,
        top: 0
    }, timer);
});