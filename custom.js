/* TA/PC 헤더 스크롤 & GO TO TOP 버튼 스크롤 이동 */
$(window).scroll(function(){
	var y = $(this).scrollTop();
	if(y > 80) {
		$('.lnb').addClass('fixed');
		$('header').addClass('resize');
		$('.logo_inner').addClass('resize');
		$('nav.lnb').addClass('resize');
		$('nav.lnb.is_show').addClass('resize');
	} else {
		$('.lnb').removeClass('fixed');
		$('header').removeClass('resize');
		$('.logo_inner').removeClass('resize');
		$('nav.lnb').removeClass('resize');
		$('nav.lnb.is_show').removeClass('resize');
	}
	if( y > 300 ){
		$('.btn_scroll').fadeIn();
	} else {
		$('.btn_scroll').fadeOut();
	}
});
function scrollup(){
	$('html, body').animate({scrollTop:0}, 'slow');
};

/* MO/TA 사이드메뉴 토글 */
function toggle_nav(name, obj){
	var obj_name = $('nav.' + name);
	var obj = $(obj);
	if(obj_name.hasClass('is_show')) {
		$('body').removeClass('view_nav');
		obj_name.removeClass('is_show');
		obj.removeClass('active');
	} else {
		$('body').addClass('view_nav');
		obj_name.addClass('is_show');
		obj.addClass('active');
    }
};

/* nav 밖 배경 클릭시 nav 사라지기 */
$(window).ready(function(){
	$('#dimmed').click(function(){
		$('body').removeClass('view_nav');
		$('nav').removeClass('is_show');
		$('header .gnb.left li.category a').removeClass('active');
	})
});

/* MO/TA nav 서브메뉴 second 토글 */
$(function(){
	$('.lnb .cate .first').click(function() {
		var num = $('.lnb .cate .first').index(this);
		$('.lnb .cate .first').each(function(no){
			if (no == num){
				if($(this).next('.second').css('display') == 'block') {
					$(this).removeClass('selected');
					$(this).next('.second').slideUp();
				} else {
					$(this).addClass('selected');
					$(this).next('.second').slideDown();
				}
			} else {
				$(this).removeClass('selected');
				$(this).next('.second').slideUp();
			}
		});
		return false;
	});
});

/* 메인 비주얼 슬라이드 */
$(function(){
	var visual_slide = new Swiper('.swiper_main', {
		slidesPerView: 3, 
		spaceBetween: 20,
        slidesPerGroup: 3,
		loop: true,
		speed: 500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
        breakpoints: {
			768: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				centeredSlides: true,
			},
        }
	});
});
