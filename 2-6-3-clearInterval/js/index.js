const $pic = $('#Pic');
const $btnPause = $('#BtnPause');
const $btnPlay= $('#BtnPlay')
let fileNum = 1;
let picInterval;
const duration = 100;

function doNext() {
    if (fileNum < 24) {
        fileNum += 1;
    } else {
        fileNum = 1;
    }
    $pic.attr('src', './images/pic' + fileNum + '.jpg')
}


// init
picInterval = setInterval(doNext, duration);

// event
$btnPause.click(function () {
    clearInterval(picInterval);
});

$btnPlay.click(function () {
    clearInterval(picInterval);
    picInterval = setInterval(doNext, duration);
});

// let fileNum = 24;
// setInterval(function () {
//     if (fileNum > 1) {
//         fileNum - 24;
//     } else {
//         fileNum = 24;
//     }
//     $pic.attr('src', './images/pic' + fileNum + '.jpg')
// }, 100);