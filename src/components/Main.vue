<template>
<div id="main">
    <div class="swiper-container">  
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swipe_img1" data-swiper-animation="fadeIn"  data-duration="1.5s" data-delay="1s">
              <div class="layer">
                <div>
                  <span>사무실을,</span>
                  <span>새 분위기로 바꿔보세요!</span>
                  <p>2020.4.1 ~ 2020.5.5</p>
 
                  <div class="button">
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="12" x2="20" y2="12"/> <polyline points="14 6 20 12 14 18"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img2" data-swiper-animation="fadeIn"  data-duration="1.5s" data-delay="1s"> 
              <div class="layer">
                <div>
                  <span>감성에 가성비까지</span>
                  <span>거품을 줄인 서재를 만나보세요.</span>
                  <div class="button">
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="12" x2="20" y2="12"/> <polyline points="14 6 20 12 14 18"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img3" data-swiper-animation="fadeIn"  data-duration="1.5s" data-delay="1s">
              <div class="layer">
                <div>
                  <span>사무실을,</span>
                  <span>새 분위기로 바꿔보세요!</span>
                  
                  <div class="button">
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="12" x2="20" y2="12"/> <polyline points="14 6 20 12 14 18"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img4" data-swiper-animation="fadeIn"  data-duration="1.5s" data-delay="1s">
              <div class="layer">
                <div>
                  <span>사무실을,</span>
                  <span>새 분위기로 바꿔보세요!</span>
                  <div class="button">
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="12" x2="20" y2="12"/> <polyline points="14 6 20 12 14 18"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="swiper-button">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>  
    <!--    섹션 1     -->
    <div class="main-sec1">
      <h2>title</h2>
      <div class="main-sec-wrap">
        <div class="product-wrap">
          <div class="product">
            <div class="produtc-img1"></div>
          </div>
          <div class="product">
            <div class="produtc-img2"></div>
          </div>
          <div class="product">
            <div class="produtc-img3"></div>
          </div>
          <div class="product">
            <div class="produtc-img4"></div>
          </div>
        </div> 
    </div>
    <div id="text-wrap" class="main-sec2">
      <h2>오늘의 공간</h2>
      <div :class="['main-sec-wrap', {show:text_scroll}]" >
        <div class="text-wrap"> 
            <span>당신의 공간을 아름답게</span>
            <span>꾸미기 위한</span>
            <span>영감을 드립니다</span>
        </div>
        <div class="img-wrap">
          <div></div>
        </div>
      </div>
    </div>
    </div>
    <div class="main-sec3">
      <div class="main-sec-wrap"></div>
    </div>
</div>      
</template>

<script> 
import Swiper from 'swiper'
import SwiperAnimation from 'swiper-animation';
import 'swiper/css/swiper.min.css'
import 'swiper/'
import '../assets/css/main.css'
export default { 
    title: 'main', 
    data() {
      return {
        Swiper: null,
        SwiperAnimation: null,
        text_scroll: false,
      }
    }, 
    beforeMount() {
      window.addEventListener('scroll', this.textScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.textScroll)
    }, 
    mounted() {
    const swiperAnimation = new SwiperAnimation();
    this.Swiper = new Swiper('.swiper-container', {

      on: {
        init: function () {
          swiperAnimation.init(this).animate();
        },
        slideChange: function () {
          swiperAnimation.init(this).animate();
        }
      },
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      // autoplay: {
      //   delay: 5000,
      // },
    }) 
  },
  methods: {
    textScroll(){
      var target = document.getElementById('text-wrap')
      if (target) {
        const clientRect = target.getBoundingClientRect();
        const relativeTop = clientRect.top;
        const scrolledTopLength = window.pageYOffset;

        this.text_ticker = scrolledTopLength + relativeTop
      }
      if (window.scrollY > this.text_ticker) {
        this.text_scroll = true
      } else {
        this.text_scroll = false
      }
    }
  },
}
</script> 