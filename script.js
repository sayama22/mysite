$(function(){
    // ページトップ
    $('.page-top-line').on('click',function() {
        $("body,html").animate({scrollTop: 0,}, 300);
        return false;
    });

    // ページ内スクロール
    const navHeight = $('.header').outerHeight();

    $('a').on('click',function() {
        const href = $(this).attr('href');
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top - navHeight;
        $("html,body").animate({ scrollTop: position, },300, 'swing');
        return false;
    });

    // 画像にアニメーション
    $('.works-top a').on('mouseout',function(){
        // $(this).next().animate({
        //     opacity: 0
        // }, 100);
        $(this).next().hide();
        $(this).next().next().hide();
    });
    $('.works-top a').on('mouseover',function(){
    //     $(this).next().animate({
    //         opacity: 1
    //     }, 100);
    // });
    $(this).next().show(300);
    $(this).next().next().show(400);
    });
});