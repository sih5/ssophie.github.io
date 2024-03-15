/* 헤더 스크롤 - 헤더 탑 배너 사라지기 */
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
        $('header .pc_hd').addClass('scroll');
        $('header .pc_hd a').addClass('scroll');
        $('header .pc_hd .gnb_top ul.top_menu li.color a').addClass('scroll');
        $('header .pc_hd .submenu').addClass('scroll');
    } else {
        $('header .pc_hd').removeClass('scroll');
        $('header .pc_hd a').removeClass('scroll');
        $('header .pc_hd .gnb_top ul.top_menu li.color a').removeClass('scroll');
        $('header .pc_hd .submenu').removeClass('scroll');
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
			$('header .mo_hd ul.mo_gnb li.search a').removeClass('active');
			$('#box_search').hide();
		};
	}
};

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
				$('header .mo_hd ul.mo_gnb li.category a').removeClass('active');
				$('body').removeClass('view_nav');
			}
		}
	} else {
		search.hide();
		obj.removeClass('active');
	}
};

$(function(){

    /* [섹션1] 기프트 세트 - 슬릭 슬라이더 */
    $('.slider_gift').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
            },
        ]
    });

    /* [섹션3] 베스트 아이템 - 슬릭 슬라이더 */
    $('.slider_best').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
            },
        ]
    });

    /* AOS Scroll Reveal Animation */
    AOS.init();
 
});

/* [섹션7] 콜렉션 - 상품 더보기*/
$(function(){
    $('.collection_item').slice(0, 8).show();
    $('.load_more').click(function(){
        $('.collection_item:hidden').slice(0, 8).fadeIn();
        if($('.collection_item:hidden').length == 0){
            $(this).hide()
        }
    });
});



