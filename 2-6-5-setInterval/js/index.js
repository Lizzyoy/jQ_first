let index = 0;
let picInterval;
const duration = 2000;
const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');

function setSlide() {
    if (index < 4) {
        index += 1
    } else {
        index = 0
    }
    $slideImgInner.css('left', -index * 100 + '%')
}

// init
picInterval = setInterval(setSlide, duration);

// event
$slide.hover(function () {
    clearInterval(picInterval)
}, function () {
    picInterval = setInterval(setSlide, duration);
})