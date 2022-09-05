let fileNum = 1;
console.log(1);

$('#Pic').attr('src', './images/ui0' + fileNum + '.jpg')

$('#Pic').click(function () {
    fileNum = fileNum + 1;
    console.log;
    $(this).attr('src', './images/ui0' + fileNum + '.jpg')
});