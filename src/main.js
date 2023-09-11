import { createApp } from 'vue'
import '../src/assets/CSS/style.css'
import 'mosha-vue-toastify/dist/style.css'
import 'aos/dist/aos.css'
import CKEditor from '@mayasabha/ckeditor4-vue3';
import 'swiper/css';
import 'swiper/css/pagination';
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import Aos from 'aos';
import axios from 'axios'
const app = createApp(App)
window.axios = axios
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(Aos.init({
    once:true,
    duration:1000
}))
app.use(CKEditor)
app.mount('#app')
