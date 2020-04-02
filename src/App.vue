<template>
  <div>
    <Header></Header> 
      <router-link :to="{ name: 'home' }"></router-link>
      <router-view />
    <Footer></Footer>
  </div>
</template> 
<script> 

  import vue from 'vue';
  import VueRouter from "vue-router";
  import Header from './Header';
  import Footer from './components/Footer'; 
  import Swiper from 'swiper';
  
 

import './assets/css/reset.css'
export default {
  name: 'App',

  components: { 
    Header,
    Footer,  
  },
};
</script>
