/* GO TO TOP 버튼 스크롤 이동 & PC 헤더 사이즈 변경과 고정 */
$(window).scroll(function(){
	var y=$(this).scrollTop();
	var w = $(window).width();
	var extraH = w > 1024 ? $('.hd_inner').outerHeight() : 0;
	if( y > 300 ){
		$('.btn_scroll').fadeIn();
	} else {
		$('.btn_scroll').fadeOut();
	}
	if( y > extraH){
		$('.hd_inner').addClass('move');
	} else {
		$('.hd_inner').removeClass('move');
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
		// 검색창 열려있을때 검색창 닫기
		if($('#box_search').css('display') == 'block'){
			$('header .hd_inner .gnb > li.search > a').removeClass('active');
			$('#box_search').hide();
		};
	}
};

/* MO/TA nav 밖 배경 클릭시 nav 사라지기 */
$(window).ready(function(){
	$('#dimmed').click(function(){
		$('body').removeClass('view_nav');
		$('nav').removeClass('is_show');
		$('header .hd_inner .gnb li.category a').removeClass('active');
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

/* PC 헤더 디자인 변경 */
$(window).scroll(function(){
	var scroll = $(window).scrollTop(); 
	if (scroll >= 5) {
		$('header').addClass('move');
	} else {
		$('header').removeClass('move');
	}
});

/* 헤더 검색창 */
function toggle_view(selector, obj){
	var search = $('#' + selector + '');
	var obj = $(obj);
	if (search.css('display') == 'none') {
		search.show();
		obj.addClass('active');
		// 검색 클릭시 nav 열려있으면 nav 닫기
		if (selector == 'box_search'){
			if($('nav').hasClass('is_show')){
				$('nav').removeClass('is_show');
				$('header .hd_inner .gnb li.category a').removeClass('active');
				$('body').removeClass('view_nav');
			}
		}
	} else {
		search.hide();
		obj.removeClass('active');
	}
};

/* 메인 비주얼 슬라이더 */
$(function(){
	var swiper = new Swiper('.swiper_main', {
		slidesPerView: 2.3,
		spaceBetween: 10,
		slidesPerGroup:2,
		centeredSlides: true,
		speed: 500,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		}, 
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1024: {
				slidesPerView:'auto',
				spaceBetween: 10,
				slidesPerGroup: 1,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				centeredSlides: true,
			},
		}  
	  });
});

/* [섹션1] 추천 게임 피의거짓 슬라이드 */
$(function(){
	var swiper = new Swiper('.swiper_recommend', {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});

/* [섹션2] 게임 광고 01 이미지맵  */
$(document).ready(function() {
	$('img[usemap]').rwdImageMaps();
});

/* [섹션3] 독점 게임  */
$(function(){
	var swiper = new Swiper('.swiper_exclusive', {
		slidesPerView: 4.5,
		spaceBetween: 10,
		centeredSlides: true,
		speed: 500,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		breakpoints: {
			1024: {
				slidesPerView: 2.5,
				spaceBetween: 10,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				centeredSlides: true,
			},
		}  
	});
});

/* [섹션6] 게임 광고 03 드래곤즈도그마 슬라이드 */
$(function(){
	var swiper = new Swiper('.swiper_ad3', {
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});

/* [섹션9] 자주 묻는 질문 */
$(function(){
	$('.question').click(function() {
		var num = $('.question').index(this);
		$('.question').each(function(no){
			if (no == num){
				if($(this).next('.answer').css('display') == 'block') {
					$(this).removeClass('on');
					$(this).next('.answer').slideUp();
				} else {
					$(this).addClass('on');
					$(this).next('.answer').slideDown();
				}
			} else {
				$(this).removeClass('on');
				$(this).next('.answer').slideUp();
			}
		});
		return false;
	});
});

/* 푸터 */
$(function(){
	$('.all_menu_mo p').click(function() {
		var num = $('.all_menu_mo p').index(this);
		$('.all_menu_mo p').each(function(no){
			if (no == num){
				if($(this).next('.menu_cate_mo').css('display') == 'block') {
					$(this).removeClass('drop');
					$(this).next('.menu_cate_mo').slideUp();
				} else {
					$(this).addClass('drop');
					$(this).next('.menu_cate_mo').slideDown();
				}
			} else {
				$(this).removeClass('drop');
				$(this).next('.menu_cate_mo').slideUp();
			}
		});
		return false;
	});
});