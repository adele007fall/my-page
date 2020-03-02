<template>
  <div id="header">
    <div class="header-wrap">
      <div class="scroll-hide">
        <div class="logo">
        </div>
        <div class=""> 
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
import Vue from 'vue';
import Dropdown from 'bp-vuejs-dropdown';

export default {
  components: { Dropdown }
 
}
</script> 
