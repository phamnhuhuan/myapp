<template>
    <div class="loader" v-if="loading">
        <div>
        <img src="https://huanapi.000webhostapp.com/image/loading.gif" alt="">
    </div>
</div>
    <div class=" max-w-[1230px] mx-auto px-[15px] mb-3" v-else>
        <div class="">
            <p class=" text-primary uppercase font-medium text-xl">{{ tour.name_tour }}</p>
            <p class=" my-2 text-xl">Giá tour gốc/khách: {{ tour.price }} VNĐ</p>
            <div>
                <button class=" py-2 px-7 bg-primary text-white rounded-md hover:bg-hover-primary transition-all"
                    v-on:click=" opensend = !opensend">Đặt Ngay</button>
                <form @submit.prevent="addcustomer()">
                    <div :class="{ active_send: opensend }"
                        class="send_infor fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] hidden animate-overlay"
                        v-on:click.self=" opensend = !opensend">
                        <div class=" mx-3 translate-y-9 lg:translate-y-7 animate-send">
                            <div class=" max-w-[510px] rounded-xl bg-white mx-auto p-4 sm:p-7">
                                <div class=" text-center text-primary text-[20px] font-medium">Thông tin liên hệ</div>
                                <div class="auth_form my-5 sm:my-7">
                                    <i class="fa-solid fa-circle-user icon_input"></i>
                                    <input type="text" placeholder="Tên của bạn" class=" flex-1" v-model="name_customer">
                                </div>
                                <div class=" -my-5 text-error p-1" v-if="err_customer.name_customer">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_customer.name_customer[0] }}
                                </div>

                                <div class="auth_form my-5 sm:my-7">

                                    <i class="fa-solid fa-phone-volume icon_input"></i>
                                    <input type="text" placeholder="Số điện thoại" class=" flex-1" v-model="phone_customer">
                                </div>
                                <div class=" -my-5 text-error p-1" v-if="err_customer.phone_customer">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_customer.phone_customer[0] }}
                                </div>
                                <div class="auth_form my-5 sm:my-7">
                                    <i class="fa-solid fa-credit-card icon_input"></i>
                                    <input type="text" placeholder="Số chứng minh thư nhân dân" class=" flex-1"
                                        v-model="cmt_customer">
                                </div>
                                <div class=" -my-5 text-error p-1" v-if="err_customer.cmt_customer">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_customer.cmt_customer[0] }}
                                </div>
                                <div class="auth_form my-5 sm:my-7">
                                    <i class="fa-solid fa-calendar-days icon_input"></i>
                                    <input type="date" class=" flex-1" v-model="date_customer">
                                </div>
                                <div class=" -my-5 text-error p-1 mb-2" v-if="err_customer.date_customer">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_customer.date_customer[0] }}
                                </div>
                                <input type="text" class=" flex-1 border" v-model="id_tour" hidden>
                                <div class=" flex justify-end">
                                    <div class=" mr-3">
                                        <button type="submit" class="btn_send bg-primary">Gửi</button>
                                    </div>
                                    <div class=" cursor-pointer" v-on:click=" opensend = !opensend">
                                        <div class="btn_send bg-hover-primary">Hủy</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class=" flex py-3 flex-wrap">
            <div :class="{ active: tabs === 'tab1' }" class="detail_tour mr-2 sm:mr-7 p-2" v-on:click="tabs = 'tab1'">
                <i class="fa-solid fa-umbrella"></i> Thông tin
            </div>
            <div :class="{ active: tabs === 'tab2' }" class=" detail_tour mr-2 sm:mr-7 px-2 p-2" v-on:click="tabs = 'tab2'">
                <i class="fa-solid fa-car-side"></i> Tổng quan
            </div>
            <div :class="{ active: tabs === 'tab3' }" class=" detail_tour p-2" v-on:click="tabs = 'tab3'">
                <i class="fa-solid fa-camera"></i> Lộ trình
            </div>
        </div>
        <div class="content_tab hidden animate-overlay" :class="{ active: tabs === 'tab1' }">
            <div v-html="tour.infor"></div>
        </div>
        <div class="content_tab hidden animate-overlay" :class="{ active: tabs === 'tab2' }">
            <div v-html="tour.about"></div>
        </div>
        <div class="content_tab hidden animate-overlay" :class="{ active: tabs === 'tab3' }"><img :src="getimage(tour.map)"
                alt=""></div>

    </div>
</template>
<script>
import useImage from '../../store/LinkImage/getimage'
import { reactive, toRefs, ref } from 'vue'
import { useRoute ,useRouter} from "vue-router";

export default {
    setup() {
        const route = useRoute()
        const id = route.params.id;

        const tab = reactive({
            loading:true,
            opensend: false,
            tabs: 'tab1',
        })
        const form = reactive({
            name_customer:'',
            phone_customer:'',
            cmt_customer:'',
            date_customer:'',
            id_tour:id
        })
        const router=useRouter()
        const { getimage } = useImage()
        const tour = ref({})
        const gettour = () => {
            axios.get(`https://huanapi.000webhostapp.com/api/tour/${id}`)
                .then((response) => {
                    setTimeout(() => {
                        tab.loading=false
                    }, 1000);
                    tour.value = response.data.tour;

                }).catch((err) => {
                   
                });
        }
        gettour()
        const err_customer=ref({})
        const addcustomer = () => {
            const formData = new FormData();
            formData.append('name_customer', form.name_customer);
            formData.append('phone_customer', form.phone_customer);
            formData.append('cmt_customer', form.cmt_customer);
            formData.append('date_customer', form.date_customer);
            formData.append('id_tour', form.id_tour);
            axios.post('https://huanapi.000webhostapp.com/api/customer',formData)
                .then((response) => {
                    form.name_customer=""
                    form.phone_customer=""
                    form.cmt_customer=""
                    form.date_customer=""
                    router.push({ name: 'thankyou' })
                   
                }).catch((error) => {
                    
                    err_customer.value=error.response.data.errors
                   
                });
        }
        return {
          
            router,
            err_customer,
            addcustomer,
            getimage,
            tour,
            route,
            ...toRefs(tab),
            ...toRefs(form)
            
        }
    }
}
</script>


