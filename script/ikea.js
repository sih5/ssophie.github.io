/* header 고정 스크롤 */
$(window).scroll(function(){
    var y=$(this).scrollTop();
    if(y > 80) {
    $('.lnb').addClass('fixed');
    } else {
    $('.lnb').removeClass('fixed');
    }
});

/* ######### 슬릭 슬라이더 ######### */
$(function(){

    /* main visual 슬라이드 */
    $('.slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        pauseOnHover: false,
    });

    /* deco 슬릭 슬라드 */
    $('.deco_insta').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2500,
    });

});

/* md_pick 탭 메뉴 */
$(function(){
    $('.md_tab li').click(function(){
        $(this).addClass('active')
        $(this).siblings('li').removeClass('active')

        var tab = $(this).attr('data-alt')
        $('.cnt_md').removeClass('active')
        $('#' + tab).addClass('active')
        });
});


