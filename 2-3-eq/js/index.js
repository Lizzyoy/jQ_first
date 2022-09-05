// $('#ThumbLs > img').click(function(){
//     // 取得當事者的索引值(由 0 開始)
//     // console.log($(this).index())
//     $('#PicLs > img').eq($(this).index()).fadeIn().siblings().fadeOut()
// });


const $thumbItems = $('#ThumbLs > img');
const $picItems = $('#PicLs > img');
// 使用 let 宣告的變數可重新賦值
let index = 2;

// 初始化
$picItems
 .eq(index).fadeIn()
 .siblings().fadeOut();

// 事件
$thumbItems.click(function(){
    index = $(this).index();
    // 取得當事者的索引值(由0開始)
    // console.log(index)
    $picItems
     .eq(index).fadeIn()
     .siblings().fadeOut();
});