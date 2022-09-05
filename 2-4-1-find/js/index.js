const $lessonTitles = $('#LessonLs .lesson-title')

$lessonTitles.click(function(){
    $(this).siblings('.lesson-desc').stop(true, false).slideToggle();
    $(this).parent().siblings().find('.lesson-desc').slideUp();
})