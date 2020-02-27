<template>
  <div>
    <Header></Header> 
    <Main></Main>
  </div>
</template> 
<script> 
  import vue from 'vue';
  import Header from './Header';
  import Main from './components/Main'
  import Swiper from 'swiper'
 

import './assets/css/reset.css'
export default {
  name: 'App',

  components: { 
    Header, 
    Main
  }, 

    mounted() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      },
    }) 
  },
};
</script>
