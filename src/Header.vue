<template>
  <div id="header" :class=" {scroll: header_scroll}">
    <div class="header-wrap">
      <div class="scroll-hide">
        <div class="logo" @click="$router.push({path:'/'})">
        </div> 
      </div>
    </div>
    
    <div class="always-show">
      <div class="drop_menu-wrap">
      <div class="drop_menu">
        <dropdown :close-on-click="true" >
          <template slot="btn">모든 제품</template>
          <template slot="body">
            <ul>
              <li><a @click="$router.push({path:'/today'})" target="_blank" >소파·의자테이블</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">침대·매트리스</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">요리·식기·주방기구</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">IKEA 키드</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">수납</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">조명</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">텍스타일·러그·커튼</a></li>
              <li><a @click="$router.push({path:'/today'})" target="_blank">홈데코·반려용품</a></li> 
            </ul>
          </template>
        </dropdown>
        <dropdown>
          <template slot="btn">새로나온 제품</template>
          <template slot="body">
            <ul>
              <li><a @click="$router.push({path:'/today'})" target="_blank">새로나온 제품</a></li>  
            </ul>
            </template>
        </dropdown>
        <dropdown>
          <template slot="btn">많이 검색된 제품</template>
          <template slot="body"> 
            <ul>
              <li><a @click="$router.push({path:'/today'})" target="_blank">많이 검색된 제품</a></li> 
            </ul>
          </template>
        </dropdown>
      </div>
      </div>
      <div class="ham_btn" @click="mobileMenu">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <div v-if="mobile_menu" class="aside_bg">  
    </div>
    <div v-if="mobile_menu" class="aside">
      <!-- aside depth start -->
      <div>
        <p class="aside_depth1">
          <a href="">
            <span>
              매장 안내
            </span>
          </a>
        </p>
        <p class="aside_depth1" :class="{active:isActive}" v-on:click="downArrow"> 
            <span @click="as_menu = !as_menu">이달의 혜택
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.71,9.29,18.29,7.88,12,14.17,5.7,7.88,4.29,9.3,12,17Z"></path></svg>   
            </span> 
        </p>
        <ul v-if="as_menu" class="aside_depth2">
          <li><a href="">집에서 행복하게</a></li>
          <li><a href="">더 낮은 새로운 가격</a></li>
          <li><a href="">평일 특가</a></li>
          <li><a href="">똑똑한 주방 15% OFF</a></li>
          <li><a href="">마지막 찬스</a></li>
          <li><a href="">IKEA Family 특별가</a></li>
          <li><a href="">홈퍼니싱 레시피</a></li>
          <li><a href="">신제품</a></li> 
        </ul>
        <!-- aside depth start --> 
        <!-- aside depth start -->
        <p class="aside_depth1"> 
            <a href="#">
              <span>
                더 낮은 새로운 가격
              </span>
            </a>
          </p> 
        <!-- aside(support)-->
        <div>
          <p class="aside_depth1"> 
            <a href="#">
              <span>
                IKEA Family
              </span>
            </a>
          </p> 
          <p class="aside_depth1"> 
            <a @click="$router.push({path:'/support'})">
              <span>
                고객지원
              </span>
            </a>
          </p> 
          <p class="aside_depth1"> 
            <a href="#">
              <span>
                배송조회
              </span>
            </a>
          </p> 
          <p class="aside_depth1"> 
            <a href="#">
              <span>
                신제품
              </span>
            </a>
          </p> 
        </div> 
      </div>
    </div>
    <div class="aside_close_wrap" v-if="mobile_menu"> 
      <span class="aside_close" @click="mobile_menu = false">
        <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.45,12,16.71,8.7,15.29,7.3,12,10.59,8.74,7.32,7.33,8.75,10.62,12,7.36,15.3l1.42,1.4L12,13.41l3.32,3.26,1.41-1.42Z"></path></svg>
      </span>
    </div>
  </div>
</template>
<script>
import './assets/css/common.css'
import './assets/css/header.css'
import Vue from 'vue'
import Dropdown from 'bp-vuejs-dropdown'


export default {
  components: { Dropdown },
  data(){
    return {
      isActive: false,
      isActive_2: false,
      isActive_3: false,
      mobile_menu: false, 
      as_menu: false,
      as_menu2:false,
      as_menu3:false,
      top_scroll: false,
      header_scroll: false,  
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
    handleScroll() {
      if (window.scrollY > 120) {
        this.header_scroll = true
      } else {
        this.header_scroll = false
      }
    },
    downArrow: function() {
      this.isActive = !this.isActive; 
    },
    downArrow_2: function() {
      this.isActive_2 = !this.isActive_2; 
    },
    downArrow_3: function() {
      this.isActive_3 = !this.isActive_3; 
    },
    mobileMenu() {
      this.mobile_menu = !this.mobile_menu
    },
    // headerScroll() {
    //   var target = document.getElementById('header_show')
    //   if (target) {
    //     const clientRect = target.getBoundingClientRect();
    //     const relativeTop = clientRect.top;
    //     const scrolledTopLength = window.pageYOffset;

    //     this.head_ticker = scrolledTopLength + relativeTop
    //   }
    //   if (window.scrollY > this.head_ticker) {
    //     this.header_scroll = true
    //   } else {
    //     this.header_scroll = false
    //   }
    // }
  },
}
</script> 
