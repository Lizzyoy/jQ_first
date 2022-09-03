const $entryType = $('#EntryType');

// 初始化
$entryType.addClass('Type1');

// 事件
$('#Tab1').click(()=>{
    $entryType
        .removeClass()
        .addClass('entry-out Type1');
});

$('#Tab2').click(()=>{
    $entryType
        .removeClass()
        .addClass('entry-out Type2')
})

$('#Tab3').click(()=>{
    $entryType
        .removeClass()
        .addClass('entry-out Type3')
})