$('#Btn1').click(() => {
    $('#Pic').fadeIn()
})

$('#Btn2').click(() => {
    $('#Pic').fadeOut()
})

$('#Btn3').click(() => {
    $('#Pic').fadeTo(400, .5)
})

$('#Btn4').click(() => {
    $('#Pic').fadeTo(400, 1)
})

$('#Btn5').click(() => {
    $('#Pic').fadeToggle()
})