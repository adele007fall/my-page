<template>
  <div>
    <Header></Header> 
      <router-view></router-view>
    <Footer></Footer>
    <Notice></Notice>
  </div>
</template> 
<script> 
  
  import vue from 'vue'; 
  import VueRouter from 'vue-router'
  import Header from './Header';
  import Footer from './components/Footer'; 
  import Swiper from 'swiper';
  
 

import './assets/css/reset.css'
export default {
  name: 'App',

  components: {  
    VueRouter,
    Header,
    Footer,  
  },
};
</script>
