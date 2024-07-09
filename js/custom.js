﻿$(document).ready(function() {
	// 변수 ht에 브라우저의 높이 값을 지정
	let ht = $(window).height();
	$('section').height(ht);

	// 1. 브라우저가 리사이즈될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on('resize', function() {
		let ht = $(window).height();
		$('section').height(ht);
	});

	// 2. 메뉴 클릭시
	$('#menu li').on("click", function(e) {
		e.preventDefault();
		
		// 변수 ht에 브라우저의 높이 값을 지정
		let ht = $(window).height();

		// 변수 i에 현재 클릭한 li의 순서 값을 지정
		let i = $(this).index();

		// 브라우저 높이 값 * 박스의 순서 값은 현재 박스의 스크롤 위치 값과 동일
		let nowTop = ht * i;

		// 해당 스크롤의 위치 값으로 문서를 이동
		$('html, body').stop().animate({
			scrollTop : nowTop
		}, 1500);
	});

	// 3. 화면이 스크롤될 때마다 현재 영역에 해당하는 메뉴 활성화하기
	$(window).on("scroll", function() {
		let ht = $(window).height();

		// 변수 scroll에 현재 문서가 스크롤된 거리 저장
		let scroll = $(window).scrollTop();

		// 반복문으로 처리
		for (let i = 0; i < 6; i++) {
			if (scroll >= ht * i && scroll < ht * (i + 1)) {
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		}
	});

	// 4. 마우스 휠
	$('section').on("mousewheel", function(event, delta) {

		if (delta > 0) {
			// 마우스 휠을 올렸을 때 실행할 구문
			let prev = $(this).prev().offset().top;
			$('html, body').stop().animate({
				scrollTop : prev
			}, 1400);
		} else if (delta < 0) {
			// 마우스 휠을 내렸을 때 실행할 구문
			let next = $(this).next().offset().top;
			$('html, body').stop().animate({
				scrollTop : next
			}, 1400);
		}

	});
});