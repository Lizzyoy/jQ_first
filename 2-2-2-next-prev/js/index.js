const $advItems = $('#AdvLs .adv-item')

$advItems.hover(function(){
    $(this).stop(true, false).animate({top: 0}, 200, 'easeOutBounce' )
    $(this).prev().stop(true, false).animate({top: 118}, 200, 'easeOutBounce' )
    $(this).next().stop(true, false).animate({top: 118}, 200, 'easeOutBounce' )
}, function(){
    $advItems.stop(true, false).animate({top: 166}, 200, 'easeOutBounce')
})