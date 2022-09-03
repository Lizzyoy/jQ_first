const $content = $('#Content');
const $btnLg = $('#BtnLg')
const $btnSm = $('#BtnSm')

$btnLg.click(() => {
    // $('#Content').css('fontSize', 20)
    $content.css({
        'font-size': 20,
        'font-weight': 600,
        'font-style': 'italic',
    });
});

$btnSm.click(() => {
    $content.css('fontSize', 15)
})