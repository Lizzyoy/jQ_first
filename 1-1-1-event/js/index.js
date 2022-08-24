// // 標題一"的"click事件
// $('h1').on('click', getTitle);

// $('p').on('click', getParagraph);

// // 函數、函式、方法
// function getTitle() {
//     alert('我是標題一');
// };

// function getParagraph() {
//     alert('我是段落');
// };

// 匿名函式
// $('h1').on('click', function(){
//     alert('我是標題一');
// });

// $('p').on('click', function(){
//     alert('我是段落');
// });

// 匿名,簡化
$('h1').click(function(){
    alert('我是標題一');
});

$('p').click(function(){
    alert('我是段落');
});

// // 箭頭函式
// $('h1').click(() => {
//     alert('我是標題一');
// });
