<template>
<!-- 헤더 로고 wrap -->
    <v-card class="overflow-hidden"
    
      extension-height="260px"
      height="260px" >
    <v-app-bar 
      absolute
      color="indigo darken-2" 
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-img class="logo"></v-img>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container class="contain" style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>
<style scoped> 
  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #0058a3; 
} 
.contains {
  padding: auto;
}
  .logo {
    background: url(./assets/icon/ikea_logo.svg) no-repeat center/contain;
    width: 110px;
    height: 56px;
  }
</style>
<script>
export default {
    data(){

    }
}
</script> 
