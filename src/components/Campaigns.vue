<template>
    <div id="campaign"> 
        <div class="campa1">
            <div class="wrapper">
                <h2 data-aos="fade-up" 
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="true">기능적이고 편안한 작업 공간 꾸미기</h2>
                <span 
                    data-aos="fade-up" 
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-once="true"
                > <b>IKEA</b>가 제안하는 홈 오피스 아이디어로 조용한 거실에 <b>기능적이고,</b>  <br> 유연한 작업공간을 만들어보세요. <br> 인테리어와 잘 어울리는 <b>스타일 팁</b>도 알려드릴게요.</span>
            <div class="campa1_bg"
                data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="2400"
                data-aos-once="true"> </div>
            <div class="content"> 
                <div class="productions">
                    <div data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-once="true"></div>
                    <div data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-once="true"><b> ALGOT 알고트 </b>벽고정대/선반￦ <b>147,500</b>, <b>TJENA 셰나</b>  수납상자+뚜껑￦ <b>3,900</b></div>
                </div> 

                <div class="product-wrap">
                    <div class="product"
                    data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-once="true">
                        <a href="#">
                        <div class="prod_img produtc-img1"></div> 
                        <div><span>SKÅDIS 스코디스 클립￦ 3,000/2 개</span></div>
                        </a> 
                    </div>
                    <div class="product"
                    data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-once="true">
                        <a href="#">
                        <div class="prod_img produtc-img2"></div> 
                        <div><span>SKÅDIS 스코디스 클립￦ 3,000/2 개</span></div>
                        </a> 
                    </div>
                    <div class="product"
                    data-aos="fade-up" 
                data-aos-delay="50"
                data-aos-duration="1400"
                data-aos-once="true">
                        <a href="#">
                        <div class="prod_img produtc-img3"></div> 
                        <div><span>SKÅDIS 스코디스 클립￦ 3,000/2 개</span></div>
                        </a> 
                    </div> 
                </div>  
            </div> 
            </div>
        </div> 
    </div>
</template>
<script> 
import AOS from 'aos'
import VueRouter from 'vue-router'
import '../assets/css/campaign.css'
import '../assets/css/common.css' 
import 'aos/dist/aos.css'

export default {
    components: {  },
    title: 'campaign',
    data() {
        return {
            AOS: null,
        }
    }
}
AOS.init();
</script>