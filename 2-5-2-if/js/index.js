// 亂數範圍:0 <= random <1
// console.log(Math.random());
// const rNum = Math.random();
// console.log('亂數:' + rNum);
// console.log('10倍亂數:' + rNum * 10);
// console.log('10倍亂數(四捨五入):' + Math.round(rNum * 10));
// console.log('10倍亂數(無條件進位):' + Math.ceil(rNum * 10));
// console.log('10倍亂數(無條件捨去):' + Math.floor(rNum * 10));

// console.log(Math.floor(rNum * 4) + 1);

// 載入畫面"亂數"產生-------------------
let fileNum = Math.floor(Math.random() * 4) + 1;

$('#Pic').attr('src', './images/ui0' + fileNum + '.jpg')

$('#Pic').click(function () {
    // fileNum = fileNum + 1;
    // fileNum += 1
    if (fileNum < 4) {
        fileNum++;
    } else {
        fileNum = 1;
    }
    $(this).attr('src', './images/ui0' + fileNum + '.jpg')
});