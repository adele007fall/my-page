<template>
<div id="home">
    <div class="swiper-container">  
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swipe_img1" data-swiper-animation="fadeIn"  data-duration="1.5s" data-delay="1s">
              <div class="layer">
                <div>
                  <span>사무실을,</span>
                  <span>새 분위기로 바꿔보세요!</span>
                  <p>2020.4.1 ~ 2020.5.5</p>
 
                  <div class="button" @click="$router.push({path:'/campaign'})">
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
                  <div class="button" @click="$router.push({path:'/campaign'})">
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
                  
                  <div class="button" @click="$router.push({path:'/campaign'})">
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
                  <div class="button" @click="$router.push({path:'/campaign'})">
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
      <h2>인기 상품</h2>
      <div class="main-sec-wrap">
        <div class="product-wrap">
          <div class="product" @click="Modal = true">
            <a href="#">
              <div class="prod_img produtc-img1"></div>
              <div>
                <span>HAMMARN 함마른</span>
                <span>소파베드, 크니사 다크그레이, 블랙, 120 cm</span>
                <span>￦ 99,000/개</span>
              </div>
            </a> 
          </div> 
          <div class="product">
            <a href="#">
              <div class="prod_img produtc-img2"></div>
              <div>
                <span>KYRRE 쉬레</span>
                <span>스툴, 블랙</span>
                <span>￦ 19,900/개</span>
              </div>
            </a> 
          </div>
          <div class="product">
            <a href="#">
              <div class="prod_img produtc-img3"></div>
              <div>
                <span>SKOGSLÖK 스콕슬뢰크</span>
                <span>인체공학적 베개, 40x75 cm</span>
                <span>￦ 9,900/개</span>
              </div>
            </a> 
          </div>
          <div class="product">
            <a href="#">
              <div class="prod_img produtc-img4"></div>
              <div>
                <span>HORNAVAN 호르나반</span>
                <span>카트, 화이트, 26x48x77 cm</span>
                <span>￦ 15,000/개</span>
              </div>
            </a> 
          </div>
        </div> 
    </div>
    
    </div>
    <div id="text-wrap" class="main-sec2">
      <div>
        <div class="text-wrap">  
          <h3>오늘의 공간</h3>
            <span data-aos="fade-up" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true">당신의 공간을 아름답게</span>
            <span data-aos="fade-up" 
                  data-aos-delay="70"
                  data-aos-duration="1200"
                  data-aos-once="true">꾸미기 위한</span>
            <span data-aos="fade-up" 
                  data-aos-delay="90"
                  data-aos-duration="1400"
                  data-aos-once="true">영감을 드립니다</span>  
            <div class="check">
              <span data-aos="fade-up" 
                  data-aos-delay="120"
                  data-aos-duration="1600"
                  data-aos-once="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                합리적인 가격을 보장합니다.
              </span>
              <span data-aos="fade-up" 
                  data-aos-delay="150"
                  data-aos-duration="1800"
                  data-aos-once="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"/></svg>
                만족스러운 제품리콜을 보증합니다.
              </span> 
              <div @click="$router.push({path:'/today'})" class="button"
                  data-aos="fade-up" 
                  data-aos-delay="180"
                  data-aos-duration="1800"
                  data-aos-once="true">
                go shop
              </div>
            </div> 
        </div>
        <div class="img-wrap" data-aos="fade-in">
          <div></div>
        </div>
      </div>
    </div>
    <div class="main-sec3">
      <div class="main-sec-wrap">
        <h2>이케아 온라인 지원</h2>
        <div class="services">
          <span data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
           class="support_img"></span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>
        <div class="services">
          <span data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
          class="support_img"></span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>
        <div class="services">
          <span data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  class="support_img">
          </span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>
        <div class="services">
          <span data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  class="support_img">
          </span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>
        <div class="services">
          <span data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  class="support_img">
          </span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>
        <div class="services">
          <span  data-aos="fade-right" 
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  class="support_img">
                  <span
                    data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  >Catalog</span>
          </span>
          <div data-aos="fade-right" 
                  data-aos-delay="80"
                  data-aos-duration="1400"
                  data-aos-once="true">
            <span>2020 카탈로그</span>
            <span><a href="">홈 스타일링 트렌드 |</a> 더 대담하게. 더 멋지게. 더 스타일리시하게.
가을을 맞아 우리 집만의 색깔을 입혀볼까요?</span>
            <span><a href="">IKEA X 슈스스TV | </a>한혜연이 추천하는 올해의 컬러 & 신상픽을 만나봐요.
한혜연과 IKEA가 함께하는 홈 스타일링.</span>
            <span><a href="">다양한 집. 다양한 삶. | </a>집집마다 다른 흥미진진한 이야기.
6개의 집에 담긴 6가지 이야기를 만나보세요.</span>
            <div class="support_btn"><a href="#">2020 카탈로그 ></a></div>
          </div>
        </div>


      </div>
    </div>
</div>      
</template>

<script> 
import Swiper from 'swiper'
import SwiperAnimation from 'swiper-animation';
import AOS from 'aos'
import 'swiper/css/swiper.min.css'
import 'aos/dist/aos.css'
import 'swiper/'
import '../assets/css/main.css'
export default { 
    title: 'main', 
    data() {
      return {
        Modal:false,
        AOS:null,
        Swiper: null,
        SwiperAnimation: null,
      }
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
      autoplay: {
        delay: 5000,
      },
    }) 
  }, 
}
AOS.init();

</script> 