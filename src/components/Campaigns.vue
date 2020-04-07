<template>
    <div id="campaign"> 
        <div class="campa1">
            <div class="wrapper">
                <h2 data-aos="fade-right" 
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="true">기능적이고 편안한 작업 공간 꾸미기</h2>
                <span 
                    data-aos="fade-right" 
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-once="true"
                >IKEA가 제안하는 홈 오피스 아이디어로 조용한 거실에 기능적이고, <br> 유연한 작업공간을 만들어보세요. <br> 인테리어와 잘 어울리는 스타일 팁도 알려드릴게요.</span>
            <div class="campa1_bg"
                data-aos="fade-right" 
                data-aos-delay="50"
                data-aos-duration="2400"
                data-aos-once="true"> </div>
            <div class="content"> 
                <div class="productions">
                    <div></div>
                    <div></div>
                </div>
                <div class="texts"> 
                    IKEA는 여러분이 우리의 제품으로 창의력을 발휘하기를 바랍니다. 
                    <br>
                    마음껏 도전하세요! 
                    <br>
                    하지만 IKEA의 제품을 더 이상 그 원래 목적으로 사용하거나, 
                    <br>
                    재판매할 수 없도록 변경하거나 개조한다면, 
                    <br>
                    IKEA의 제품에 대해 여러분이 가질 수 있는 품질보증과 반품 권리를 잃게 될 수 있음을 명심해 주시기 바랍니다
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