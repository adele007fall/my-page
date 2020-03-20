<template>
  <div id="header" :class=" {scroll: header_scroll}">
    <div class="header-wrap">
      <div class="scroll-hide">
        <div class="logo">
        </div> 
      </div>
    </div>
    
    <div class="always-show">
      <div class="drop_menu-wrap">
      <div class="drop_menu">
        <dropdown>
          <template slot="btn">모든 제품</template>
          <template slot="body">
            <ul>
              <li><a href="" target="_blank">소파·의자테이블</a></li>
              <li><a href="" target="_blank">침대·매트리스</a></li>
              <li><a href="" target="_blank">요리·식기·주방기구</a></li>
              <li><a href="" target="_blank">IKEA 키드</a></li>
              <li><a href="" target="_blank">수납</a></li>
              <li><a href="" target="_blank">조명</a></li>
              <li><a href="" target="_blank">텍스타일·러그·커튼</a></li>
              <li><a href="" target="_blank">홈데코·반려용품</a></li> 
            </ul>
          </template>
        </dropdown>
        <dropdown>
          <template slot="btn">새로나온 제품</template>
          <template slot="body">
            <ul>
              <li><a href="" target="_blank">새로나온 제품</a></li>  
            </ul>
            </template>
        </dropdown>
        <dropdown>
          <template slot="btn">많이 검색된 제품</template>
          <template slot="body"> 
            <ul>
              <li><a href="" target="_blank">많이 검색된 제품</a></li> 
            </ul>
          </template>
        </dropdown>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import './assets/css/common.css'
import './assets/css/header.css'
import Vue from 'vue';
import Dropdown from 'bp-vuejs-dropdown';
 

export default {
  components: { Dropdown },
  data(){
    return {
      top_scroll: false,
      header_scroll: true, 
      head_ticker: null,
    }
  },
   beforeMount() {
      window.addEventListener('scroll', this.headerScroll)
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.headerScroll)
      window.removeEventListener('scroll', this.handleScroll)
    }, 
  methods: {
    // handleScroll() {
    //   if (window.scrollY <= '110px') {
    //     this.top_scroll = true
    //   } else {
    //     this.top_scroll = false
    //   }
    // },
    headerScroll() {
      var target = document.getElementById('header_show')
      if (target) {
        const clientRect = target.getBoundingClientRect();
        const relativeTop = clientRect.top;
        const scrolledTopLength = window.pageYOffset;

        this.head_ticker = scrolledTopLength + relativeTop
      }
      if (window.scrollY > this.head_ticker) {
        this.header_scroll = true
      } else {
        this.header_scroll = false
      }
    }
  },
}
</script> 
