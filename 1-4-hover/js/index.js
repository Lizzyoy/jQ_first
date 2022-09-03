// $('#Item1').mouseenter(() => {
//     console.log(1234)
// });

// $('#Item1').mouseleave(() => {
//     console.log(1234)
// });


// $('#Item1').hover(() => {
//     console.log(1234)
// }, () => {
//     console.log(5678)
// })

$('#Item1').hover(() => {
    $('#Child1').stop(true, false).slideDown()
}, () => {
    $('#Child1').stop(true, false).slideUp()
})

$('#Item2').hover(() => {
    $('#Child2').stop(true, false).slideDown()
}, () => {
    $('#Child2').stop(true, false).slideUp()
})

$('#Item3').hover(() => {
    $('#Child3').stop(true, false).slideDown()
}, () => {
    $('#Child3').stop(true, false).slideUp()
})

$('#Item4').hover(() => {
    $('#Child4').stop(true, false).slideDown()
}, () => {
    $('#Child4').stop(true, false).slideUp()
})

$('#Item5').hover(() => {
    $('#Child5').stop(true, false).slideDown()
}, () => {
    $('#Child5').stop(true, false).slideUp()
})