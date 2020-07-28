<template>
    <div id="campaign"> 
        <div class="campa1">
            <div class="wrapper clear">
                <div class="section1_wrap">

                <div class="campa1_bg"
                    data-aos="fade-up" 
                    data-aos-delay="50"
                    data-aos-duration="2400"
                    data-aos-once="true"> </div>
                <parallax class="campa1_text" :sectionClass="campa1_text" :parallax="false" fixed="true" :speed-factor="0.15" direction="down" >
                    <h2 data-aos="fade-up" 
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-once="true">산뜻하고 여유로운 초록빛
                    </h2>
                    <div class="texts" data-aos="fade-up" 
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-once="true">
                        따스한 색과 편안한 분위기가 어우러진 침실은 
                        <br>
                        휴식과 재충전을 위한 공간뿐만 아니라 
                        <br>
                        나만의 세계에서 일에만 온전히 집중할 수 있는 
                        <br>
                        작업 공간도 될 수 있어요.
                    </div>
                </parallax>
                </div>
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
import Parallax from 'vue-parallaxy'
import VueRouter from 'vue-router'
import '../assets/css/today.css'
import '../assets/css/common.css' 
import 'aos/dist/aos.css'

export default {
    components: { Parallax },
    title: 'campaign',
    data() {
        return {
            AOS: null,
            fixed_text: false,
        }
    },
    methods: {}
}
AOS.init();
</script>