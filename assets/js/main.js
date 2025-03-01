window.addEventListener('scroll', () => {
  //idがkeyvisualの要素を取得
  let elem = document.getElementById('keyvisual');
  //現在のスクロール位置を取得して、10で除算
  let scrollY = window.scrollY / 45;
  //上で取得した値と画像幅を加算して、elemの背景サイズに設定
  elem.style.backgroundSize = 100 + scrollY + '%';
});



window.addEventListener('load', () => {
  ScrollTrigger.refresh();
})
setTimeout(() => {
  ScrollTrigger.refresh();
},5000)

const listWrapperEl = document.querySelector('.side-scroll-wrapper');
if (listWrapperEl) {
  const listEl = document.querySelector('.p-biography__ol');
  gsap.to(listEl, {
    x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.p-biography',
      start: 'start start',
      end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
      scrub: true,
      pin: '.p-biography',
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

gsap.utils.toArray('.p-about2__mv-wrapper').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -100;

  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5,
    }
  })
});


$(".o-btn__openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#o-animation__g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $(".o-animation__circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  // $(".o-hambager__anime").removeClass('animeactive');//丸背景のcircleactiveクラスを除去
});

$("#o-animation__g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".o-btn__openbtn").removeClass('active');//ボタンの activeクラスを除去し
  $("#o-animation__g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
  $(".o-animation__circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

const worksWrapperEl = document.querySelector('.p-works');
if (worksWrapperEl && document.documentElement.clientWidth >= 800) {
  const worksEl = document.querySelector('.p-works__ul');
  console.log(worksEl.clientHeight, worksWrapperEl.clientHeight)
  gsap.to(worksEl, {
    y: () => -(worksEl.clientHeight - worksWrapperEl.clientHeight),
    ease: 'none',
    scrollTrigger: {
      trigger: '.p-works',
      start: 'start start',
      end: () => `+=${worksEl.clientHeight - worksWrapperEl.clientHeight}`,
      scrub: true,
      pin: '.p-works',
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
}

const contactWrapperEl = document.querySelector('.l-section__contact');
const contactBallEl = document.querySelector('.p-contact__background-circle');
gsap.fromTo(contactBallEl, {

  scale: 0.7
}, {
  scale: 1,
  duration: .6,
  scrollTrigger: {
    trigger: contactWrapperEl,
    start: 'top 90%',
    end: 'bottom 50%',
    invalidateOnRefresh: true,
    toggleActions: "play none none reverse",
  },
})

const anchorLinks = document.querySelectorAll('a[href="#"]');
for (const anchorLink of anchorLinks) {
  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    const href = anchorLink.href;
    const index = href.indexOf('#');
    const hash = href.substring(index);
    console.log(hash)
    console.info(anchorLink.href)
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: 0
      }
    })
  })
}

// 監視用の ResizeObserver インスタンスを用意
// 監視対象要素の大きさが変わるたびにこれに渡したコールバックが走る
const textareaObserver = new ResizeObserver(resizeHandler);

// ResizeObserver インスタンスに監視対象要素を登録
textareaObserver.observe(
  document.querySelector('body')
);

/** 監視対象要素の大きさが変わるたびに実行される関数 */
function resizeHandler(entries) {
  for (let entry of entries) {
    ScrollTrigger.refresh()
  }
}

const paraBgs = document.querySelectorAll('.c-para-bg-img');
if (paraBgs.length) {
  for (const paraBg of paraBgs) {
    gsap.to(paraBg.querySelector('img'), {
      yPercent: -100 * 20 / 120,
      ease: "none",
      scrollTrigger: {
        trigger: paraBg,
        start: 'top bottom',
        end: 'bottom 0%',
        scrub: true
      }
    })
  }
}

const animeSecs = document.querySelectorAll('.js-anime__section');
for (const animeSec of animeSecs) {

  const text = new SplitType(animeSec.querySelectorAll(".js-anime__title"), {
    types: 'chars',
    tagName: 'span'
  });
  gsap.set(animeSec.querySelectorAll(".js-anime__title"), { opacity: 1 })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: animeSec,
      start: "top 90%",
      end: "bottom top",
      toggleActions: "play none none none",
    }
  })

  tl.to(animeSec.querySelectorAll(".char"), {
    y: 0 /*テキストのY軸の操作*/,
    x: 0,
    opacity: 1,
    stagger: 0.05 /*テキスト間の遅延時間*/,
    delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
    duration: 0.5 /*アニメーションの時間*/,
    ease: "power2.out" /*イージングの設定*/,

  },)

  if (animeSec.querySelector(".p-top__sub-title")) {
    tl.to(animeSec.querySelector(".p-top__sub-title"), {
      opacity: 1,
      delay: 0.5 /*アニメーションのスタートまでの遅延時間*/,
      duration: 3 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.5")
  }
  if (animeSec.querySelector(".o-title__sub1")) {
    tl.to(animeSec.querySelector(".o-title__sub1"), {
      opacity: 1,
      delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
      duration: 1 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.2")
  }
  if (animeSec.querySelector(".o-title__sub2")) {
    tl.to(animeSec.querySelector(".o-title__sub2"), {
      opacity: 1,
      delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
      duration: 1 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.2")
  }

  if (animeSec.querySelectorAll(".underlayer-title")) {
    tl.to(animeSec.querySelectorAll(".underlayer-title"), {
      x: 0 /*テキストのY軸の操作*/,
      opacity: 1,
      // delay: 0.5 /*アニメーションのスタートまでの遅延時間*/,
      duration: 1 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.3")
  }

  if (animeSec.querySelectorAll(".underlayer-sub")) {
    tl.to(animeSec.querySelectorAll(".underlayer-sub"), {
      opacity: 1,
      // delay: 0.5 /*アニメーションのスタートまでの遅延時間*/,
      duration: 3 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0")
  }

  if (animeSec.querySelectorAll(".content-mockup__animation")) {
    tl.to(animeSec.querySelectorAll(".content-mockup__animation"), {
      y: 0,
      opacity: 1,
      // delay: 0.5 /*アニメーションのスタートまでの遅延時間*/,
      duration: 1 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.1")
  }

  if (animeSec.querySelectorAll(".content-base__animation")) {
    tl.to(animeSec.querySelectorAll(".content-base__animation"), {
      y: 0 /*テキストのY軸の操作*/,
      opacity: 1,
      delay: 0.5 /*アニメーションのスタートまでの遅延時間*/,
      duration: 1.5 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0")
  }
  if (animeSec.querySelectorAll(".content-base__animation2")) {
    tl.to(animeSec.querySelectorAll(".content-base__animation2"), {
      y: 0 /*テキストのY軸の操作*/,
      opacity: 1,
      duration: 1.5 /*アニメーションの時間*/,
      ease: "power2.out" /*イージングの設定*/,
    }, "<0.2")
  }
}

const scrollinClips = document.querySelectorAll('.scrollin-clip');

for (const scrollinClip of scrollinClips) {
  gsap.to(scrollinClip, {
    clipPath: 'inset(0 0% 0 0)',
    duration: .9,
    scrollTrigger: {
      trigger: scrollinClip,
      start: "top 50%",
    }
  })
}

const workAnimations = document.querySelectorAll('.work-animation');

for (const workAnimation of workAnimations) {
  gsap.to(workAnimation, {
    opacity:1,
    y: 0,
    duration: .9,
    scrollTrigger: {
      trigger: workAnimation,
      start: "top 90%",
    }
  })
}

gsap.to('.cls-1', {
      strokeDashoffset: "0px",
      duration: 1,
      stagger: 0.2,
          scrollTrigger: {
      trigger: '.circles',
      start: "top 90%",
    }
})


$(function () {
  $(window).scroll(function () {
    $('.step-animation').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(function () {
          $('.step-animation').each(function (i) {
            $(this).delay(i * 200).queue(function () {
              $(this).addClass('active');
            });
          });
        });
      }
    });
  });
});

if (location.hash) {
  setTimeout(function() {
    window.scrollTo(0, 0);
    console.log(location.hash)
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: location.hash
        }
      })
  }, 1);
}