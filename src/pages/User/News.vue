<template>
    <div class=" max-w-[1230px] mx-auto px-[15px]">
        <p class=" text-center text-primary font-medium md:text-lg mb-2 uppercase">Cẩm nang du lịch</p>
        <div v-if="loading">
            <div class="loader">
                <div>
                    <img src="https://huanapi.000webhostapp.com/image/loading.gif" alt="">
                </div>
            </div>
        </div>
        <div class=" flex justify-between flex-wrap" v-else>
            <div class=" w-full md:w-[24%] bg-white shadow-2xl rounded-md cursor-pointer mb-3 overflow-hidden"
                v-for="(news_render) in news">
                <RouterLink :to="{ name: 'detailnew', params: { id: news_render.id_news } }">
                    <div class=" overflow-hidden" data-aos="fade-left">
                        <img :src="getimage(news_render.img_news)" alt="" class="rounded-md hover:scale-125 transition-all">
                    </div>
                    <div class=" p-3">
                        <div data-aos="fade-right">
                            <p class="text-primary hover:text-hover-primary transition-all font-medium  ">{{
                                news_render.name_news }}</p>
                        </div>
                        <div v-html="news_render.content_news.substring(0, 128) + ' ...'" data-aos="fade-right"></div>
                    </div>

                </RouterLink>

            </div>

        </div>

    </div>
</template>
<script>
import useImage from '../../store/LinkImage/getimage'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
export default {
    setup() {
        const news = ref([]);
        const loading = ref(true)
        const { getimage } = useImage()
        const getnews = () => {
            axios.get('https://huanapi.000webhostapp.com/api/new')
                .then((response) => {
                    if (response) {
                        setTimeout(() => {
                            loading.value = false
                        }, 1000);
                        news.value = response.data.news;
                    }

                }).catch((err) => {

                });
        };
        getnews();
        return {
            loading,
            news,
            getimage
        };
    },

}
</script>