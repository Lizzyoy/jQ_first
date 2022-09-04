const $advItems = $('#AdvLs .adv-item')

$advItems.hover(function(){
    $(this).stop(true, false).animate({top: 0}, 200);
    $(this).siblings().stop(true, false).animate({top: 118}, 200);
}, function(){
    $advItems.stop(true, false).animate({top: 166}, 200);
    // $(this).siblings().stop(true, false).animate({top: 166}, 200);
})