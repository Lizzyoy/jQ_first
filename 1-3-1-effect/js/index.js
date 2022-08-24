// $('#Thumb1').click(() => {
//     $('#Pic1').fadeIn();
//     $('#Pic2').fadeOut();
//     $('#Pic3').fadeOut();
//     $('#Pic4').fadeOut();
//     $('#Pic5').fadeOut();
// })

$('#Thumb1').click(() => {
    $('#Pic1').fadeIn();
    $('#Pic2','#Pic3','#Pic4','#Pic5').fadeOut();
})


$('#Thumb2').click(() => {
    $('#Pic2').fadeIn();
    $('#Pic1').fadeOut();
    $('#Pic3').fadeOut();
    $('#Pic4').fadeOut();
    $('#Pic5').fadeOut();
})

$('#Thumb3').click(() => {
    $('#Pic3').fadeIn();
    $('#Pic1').fadeOut();
    $('#Pic2').fadeOut();
    $('#Pic4').fadeOut();
    $('#Pic5').fadeOut();
})

$('#Thumb4').click(() => {
    $('#Pic4').fadeIn();
    $('#Pic1').fadeOut();
    $('#Pic2').fadeOut();
    $('#Pic3').fadeOut();
    $('#Pic5').fadeOut();
})

$('#Thumb5').click(() => {
    $('#Pic5').fadeIn();
    $('#Pic1').fadeOut();
    $('#Pic2').fadeOut();
    $('#Pic3').fadeOut();
    $('#Pic4').fadeOut();
})