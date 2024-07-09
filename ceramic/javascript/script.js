jQuery(document).ready(function() {
  $('.mainmenu li').mouseover(function() {
    $('.submenu').stop().slideDown(500);
  }).mouseout(function () {
    $('.submenu').stop().slideUp(500);
  });

  // gsap 애니메이션
  
  gsap.to('.ceramicplay', {
    scrollTrigger: {
      trigger: '.ceramicplay', // 객체기준범위
      start: '0% 25%', // 시작 지점
      end: '100% 75%', // 끝 지점
      scrub: 1, // 부드러운 애니메이션
    },
    rotation: 360
  })

  gsap.to('.con2box p', {
    scrollTrigger: {
      trigger: '.con2box p', // 객체기준범위
      start: '0% 75%', // 시작 지점
      end: '100% 75%', // 끝 지점
      scrub: 1, // 부드러운 애니메이션
    },
    x: 275
  })

  gsap.to('.con3 .tools', {
    scrollTrigger: {
      trigger: '.con3 .tools', // 객체기준범위
      start: '0% 75%', // 시작 지점
      end: '100% 75%', // 끝 지점
      scrub: 1, // 부드러운 애니메이션
    },
    scale: 1.1
  })

  gsap.to('.con4box p', {
    scrollTrigger: {
      trigger: '.con4box p', // 객체기준범위
      start: '0% 75%', // 시작 지점
      end: '100% 75%', // 끝 지점
      scrub: 1, // 부드러운 애니메이션
    },
    x: -325
  })

  gsap.to('.con5 .paint img', {
    scrollTrigger: {
      trigger: '.con5 .paint img', // 객체기준범위
      start: '0% 70%', // 시작 지점
      end: '100% 75%', // 끝 지점
      scrub: 1, // 부드러운 애니메이션
    },
    rotationY: 180
  })
});