<template>
   <!-- Tour detail -->
   <div v-if="loading">
            <div class="loader">
                <div>
                    <img src="https://huanapi.000webhostapp.com/image/loading.gif" alt="">
                </div>
            </div>
        </div>
   <div class=" lg:hidden" v-else>
      <div class=" flex justify-center mb-2">
         <div class="cate_app cursor-pointer" v-for="render_cate in cate">
            <RouterLink :to="{ name: 'tour', params: { id: render_cate.id_cate } }">
               <div class="w-[56px] h-[56px]"><img :src="getimage(render_cate.img_cate)" alt=""></div>
               <div class=" font-medium text-center text-[15px]">{{ render_cate.name_cate }}</div>
            </RouterLink>
         </div>
      </div>
   </div>
   <!-- End Tour detail -->


   <!-- silder -->
   <div class=" max-w-[1700px] mx-auto">
      <swiper :pagination="{
         dynamicBullets: true,
      }" :modules="modules" :autoplay="{
   delay: 2700,
   disableOnInteraction: false,
}">
         <swiper-slide><img src="https://huanapi.000webhostapp.com/image/slider1.jpg" alt=""></swiper-slide>
         <swiper-slide><img src="https://huanapi.000webhostapp.com/image/slider5.png" alt=""></swiper-slide>
         <swiper-slide><img src="https://huanapi.000webhostapp.com/image/slider3.jpg" alt=""></swiper-slide>
         <swiper-slide><img src="https://huanapi.000webhostapp.com/image/slider4.jpg" alt=""></swiper-slide>
      </swiper>
   </div>
   <!-- end slider -->
   <div class=" w-full bg-list py-2 sm:py-3">
      <div class=" max-w-[1230px] m-auto px-[15px]">
         <div class=" text-primary font-medium sm:text-[24px] mb-2"><span class=" mr-2"><i
                  class="fa-solid fa-person-hiking"></i></span>Tour du lịch dành cho bạn</div>
         <div class=" flex justify-between flex-wrap">
            <div data-aos="fade-up" class=" w-[48%] lg:w-[24%] bg-white rounded-md cursor-pointer mb-4 overflow-hidden shadow-2xl"
               v-for="(render_tour) in tour">
               <router-link :to="{ name: 'detailtour', params: { id: render_tour.id_tour } }">
                  <div class=" overflow-hidden">
                     <img :src="getimage(render_tour.img_tour)" alt="" class="rounded-md hover:scale-125 transition-all">
                  </div>
                  <div class=" p-3">
                     <div>
                        <p class=" hover:text-primary transition-all font-medium  ">{{ render_tour.name_tour }}</p>
                     </div>
                     <div class=" flex flex-wrap justify-between sm:my-2">
                        <div>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star pr-2"><i class="fa-solid fa-star"></i></span>
                           <span class=" text-star"><i class="fa-solid fa-star"></i></span>
                        </div>
                        <div class=" my-1 border text-[14px] border-primary text-center text-primary rounded-lg px-3">
                           <span class=" mr-1"><i class="fa-solid fa-person-walking-luggage"></i></span><span>{{
                              render_tour.cate.name_cate }}</span>
                        </div>
                     </div>
                     <div class="font-medium text-primary">
                        <span>{{ render_tour.price.toLocaleString() }} VNĐ</span>
                     </div>
                  </div>
               </router-link>

            </div>
         </div>
      </div>
   </div>
   <div class=" max-w-[1230px] px-[15px] mx-auto"  data-aos="slide-right">
      <div class=" sm:flex sm:justify-between pb-2">
         <div class=" mt-2 sm:mr-4">
            <img src="https://huanapi.000webhostapp.com/image/travel2.jpg" alt="" class=" rounded-md">
         </div>
         <div class=" mt-2">
            <img src="https://huanapi.000webhostapp.com/image/travel1.jpg" alt="" class=" rounded-md">
         </div>
      </div>
   </div>
</template>
<script>
import useCate from '../../store/cate/getcate'
import useTour from '../../store/tour/gettour.js'
import useImage from '../../store/LinkImage/getimage'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
export default {
   components: {
      Swiper,
      SwiperSlide
   },
   setup() {
      const { cate, getcate } = useCate()
      getcate()
      const { tour, gettour ,loading} = useTour()
      const { getimage } = useImage()
      gettour()
      return {
         loading,
         cate,
         tour,
         getimage,
         modules: [Autoplay, Pagination],
      }
   }
}
</script>
 