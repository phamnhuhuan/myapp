<template>
    <div v-if="loading">
            <div class="loader">
                <div>
                    <img src="https://huanapi.000webhostapp.com/image/loading.gif" alt="">
                </div>
            </div>
        </div>
    <div class=" max-w-[1230px] mx-auto px-[15px] mb-3" v-else>
        <div data-aos="fade-left" class=" text-primary font-medium sm:text-[24px] mb-2 items-center flex">
            <span class=""></span> {{ news.name_news }}
        </div>
        <div v-html="news.content_news">
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from "vue-router";
export default {
    setup() {
        const news = ref('')
        const loading=ref(true)
        const route = useRoute()
        const id = route.params.id;
        const getnews = () => {
            axios.get(`https://huanapi.000webhostapp.com/api/new/${id}`)
                .then((response) => {
                    setTimeout(() => {
                            loading.value = false
                        }, 1000);
                    news.value = response.data.news;
                    
                }).catch((err) => {
                   
                });
        }
        getnews()
        return {
            loading,
            news,
            route
        }
    }
}
</script>