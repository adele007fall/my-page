<template>
  <div>
    <Header></Header> 
    <Main></Main>
    <Footer></Footer>
  </div>
</template> 
<script> 
  import vue from 'vue';
  import Header from './Header';
  import Footer from './components/Footer';
  import Main from './components/Main';
  import Swiper from 'swiper';
  
 

import './assets/css/reset.css'
export default {
  name: 'App',

  components: { 
    Header,
    Footer, 
    Main,
  },
};
</script>
