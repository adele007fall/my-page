<template>
<div id="main">
    <div class="swiper-container">  
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swipe_img1">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img2">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img3">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swipe_img4">
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
          <div class="product"></div>
          <div class="product"></div>
          <div class="product"></div>
          <div class="product"></div>
        </div> 
    </div>
    <div class="main-sec2">
      <div class="main-sec-wrap">
        <div class="text-wrap">
            <b>text</b>
            <span>is</span>
            <span>very</span>
            <span>powerful</span>
          </div>
          <div></div>
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
import 'swiper/css/swiper.min.css'
import '../assets/css/main.css'
export default { 
    title: 'main', 
    data() {
    return {
      Swiper: null,
    }
    },
    mounted() {
    this.Swiper = new Swiper('.swiper-container', {
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
</script> 