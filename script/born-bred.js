/* 헤더 스크롤 - 헤더 탑 배너 사라지기 */
$(window).scroll(function(){
	var scroll = $(window).scrollTop(); 
	if (scroll >= 5) {
		$('header').addClass('scroll');
	} else {
		$('header').removeClass('scroll');
	}
});

/* GO TO TOP 버튼 스크롤 이동 */
$(window).scroll(function(){
	var y=$(this).scrollTop();
	if( y > 300 ){
		$('.btn_scroll').fadeIn();
	} else {
		$('.btn_scroll').fadeOut();
	}
})

/* MO/TA 사이드메뉴 토글 */
function toggle_nav(name) {
	var obj_name = $('nav.' + name);
	if(obj_name.hasClass('is_show')) {
		$('body').removeClass('view_nav');
		obj_name.removeClass('is_show');
	} else {
		$('body').addClass('view_nav');
		obj_name.addClass('is_show');
	}
}

/* MO/TA nav 밖 배경 클릭시 nav 사라지기 */
$(window).ready(function(){
	$('#dimmed').click(function(){
		$('body').removeClass('view_nav');
		$('nav').removeClass('is_show');
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
})

/* 헤더 검색창 */
function toggle_view(selector, obj){
	var search = $('#' + selector + '');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		search.show();
		obj.addClass('active');
	} else {
		search.hide();
		obj.removeClass('active');
	}
}

/* 메인 비주얼 슬라이더 */
$(function(){
	var swiper = new Swiper('.slider_main', {
		loop:true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
		  delay: 3000,
		  disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	});
})

/* [섹션1] SHOP 탭뷰 */ 
function tabover(name, no) {
	var tabs = $('.tab_'+name+'').find('li');
	tabs.each(function(idx) {
		var detail = $('.tabcnt_'+name+idx);
		var link = $(this).find('a');
		if(no == idx) {
			detail.show();
			link.addClass('checked');
		} else {
			detail.hide();
			link.removeClass('checked');
		}
	})
}

/* [섹션4] 레스토랑 지도 */
$(function(){
	new daum.roughmap.Lander({
		"timestamp" : "1708408127932",
		"key" : "2i6sm",
		"mapWidth" : "100%",
		"mapHeight" : "360"
	}).render();
})






