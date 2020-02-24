<template>
  <div>
    <Header></Header>
    <User></User>
  </div>
</template> 
<script>
import User from './components/User';
import Header from './Header'

import './assets/css/reset.css'

export default {
  name: 'App',

  components: {
    User,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
