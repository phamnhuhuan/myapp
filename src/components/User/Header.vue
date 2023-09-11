<template>
    <!-- nav-bar -->
    <div class="w-full bg-primary hidden lg:block">
        <div class="max-w-[1230px] px-[15px] mx-auto">
            <div class="py-3 flex justify-between">
                <div class="text-white">
                    <span class=" pr-3"><i class="fa-solid fa-location-dot"></i></span><span class=" pr-6">Website demo
                        Laravel VueJS Api</span>
                    <span class=" pr-3"><i class="fa-solid fa-phone-volume"></i></span><span class=" pr-6">0382 679
                        151</span>
                    <span class=" pr-3"><i class="fa-solid fa-envelope"></i></span><span
                        class=" pr-6">phuan3366@gmail.com</span>
                </div>
                <div class="text-white ">
                    <span class="icon_header"><i class="fa-brands fa-facebook"></i></span>
                    <span class="icon_header"><i class="fa-brands fa-instagram"></i></span>
                    <span class="icon_header"><i class="fa-brands fa-youtube"></i></span>
                    <span class="icon_header"><i class="fa-brands fa-tiktok"></i></span>
                    <span class="cursor-pointer hover:opacity-70"><i class="fa-brands fa-twitter"></i></span>
                </div>
            </div>
        </div>
    </div>
    <!-- end-nav-bar -->

    <div class="max-w-[1230px] px-[15px] mx-auto">
        <div class="flex justify-between lg:justify-center items-center my-1">
            <RouterLink to="/myapp">
                <div class="max-w-[65px] md:max-w-[80px] lg:mr-7">
                    <img src="https://huanapi.000webhostapp.com/image/logo.png" alt="">
                </div>
            </RouterLink>
            <div class=" hidden lg:block">
                <div class="flex">
                    <RouterLink to="/myapp">
                        <div class="menu"><span class=" pr-1"><i class="fa-solid fa-house-user"></i></span>trang chủ</div>
                    </RouterLink>
                    <RouterLink to="/myapp/gioi-thieu">
                        <div class="menu"><span class=" pr-1"><i class="fa-brands fa-slideshare"></i></span>giới thiệu</div>
                    </RouterLink>
                    <div class="mr-7 transition-all text-primary cursor-pointer relative group"><span class=" pr-1"><i
                                class="fa-solid fa-person-walking-luggage"></i></span><span
                            class="hover:text-hover-primary uppercase font-medium">tour du lịch</span>
                        <div class=" animate-menu hidden group-hover:block overflow-hidden absolute w-[200%] z-50 rounded-md bg-white text-primary py-3"
                            style="box-shadow: 0 0 12px -3px rgba(0,0,0,.4)">
                            <div class=" px-5 py-2 transition-all hover:text-hover-primary group"
                                v-for="(cate_render) in cate">
                                <RouterLink :to="{ name: 'tour', params: { id: cate_render.id_cate } }">
                                    <span class="menu-dropdown transition-all">
                                        {{ cate_render.name_cate }}
                                    </span>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="menu" v-on:click="openbell = !openbell"><span class=" pr-1"><i
                                class="fa-solid fa-bell"></i></span>thông báo</div>
                    <RouterLink to="/myapp/tin-tuc">
                        <div class="menu"><span class=" pr-1"><i class="fa-solid fa-newspaper"></i></span>tin tức</div>
                    </RouterLink>
                    <div class="menu" v-if="token != 0">
                        <form @submit.prevent="logout">
                            <span class=" pr-1">
                                <i class="fa-solid fa-right-from-bracket"></i></span>
                            <button type="submit" class=" uppercase">đăng xuất</button>
                        </form>
                    </div>

                </div>
            </div>
            <div class=" flex">
                <div class=" icon_menu" v-on:click="opensearch = !opensearch">
                    <div class=" m-auto text-primary hover:text-hover-primary"><i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class=" lg:hidden">
                    <div class="flex">
                        <div class=" icon_menu ml-3" v-on:click="openbell = !openbell">
                            <div class=" m-auto text-primary hover:text-hover-primary"><i class="fa-solid fa-bell"></i>
                            </div>
                        </div>
                        <div class=" icon_menu ml-3" v-on:click="openbar = !openbar">
                            <div class=" m-auto text-primary hover:text-hover-primary"><i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- open bar -->
        <div :class="{ active: openbar }"
            class="bar fixed top-0 left-0 bottom-0 bg-white w-full z-50 -translate-x-full transition-all">
            <div class=" p-4">
                <div class=" text-2xl">
                    <i class="fa-solid fa-xmark cursor-pointer text-xl" v-on:click="openbar = !openbar"></i>
                </div>
                <div class=" p-3">
                    <RouterLink to="/myapp">
                        <div class=" border-b py-2 border-list" v-on:click="openbar = !openbar"><span class=" mr-4"><i
                                    class="fa-solid fa-house-user"></i></span>Trang chủ</div>
                    </RouterLink>
                    <RouterLink to="/myapp/gioi-thieu">
                        <div class=" border-b py-2 border-list" v-on:click="openbar = !openbar"><span class=" mr-4"><i
                                    class="fa-brands fa-slideshare"></i></span>Giới thiệu</div>
                    </RouterLink>
                    <RouterLink to="/myapp/tin-tuc">
                        <div class=" border-b py-2 border-list" v-on:click="openbar = !openbar"><span class=" mr-4"><i
                                    class="fa-solid fa-newspaper"></i></span>Cẩm nang du lich</div>
                    </RouterLink>
                    <div v-if="token == 0">
                        <RouterLink to="/myapp/dang-nhap">
                            <div class=" border-b py-2 border-list" v-on:click="openbar = !openbar"><span class=" mr-4"><i
                                        class="fa-solid fa-user"></i></span>Tài khoản</div>
                        </RouterLink>
                    </div>
                    <div v-else>
                        <div class=" border-b py-3 border-list cursor-pointer" v-on:click="openbar = !openbar">
                            <form @submit.prevent="logout">
                                <span class=" mr-4"><i class="fa-solid fa-right-from-bracket"></i></span>
                                <button type="submit">Đăng xuất</button>
                            </form>
                        </div>

                    </div>
                    <div class=" border-b py-3 border-list"><span class=" mr-4"><i class="fa-brands fa-vuejs"></i></span>Đặt
                        vé Laravel VueJS
                    </div>
                    <div class=" border-b py-3 border-list"><span class=" mr-4"><i
                                class="fa-solid fa-computer"></i></span>Coder by Phạm Như Huấn</div>
                </div>
            </div>
        </div>
        <!-- end open bar -->


        <!-- open search -->

        <div :class="{ active: opensearch }"
            class="search fixed top-0 left-0 bottom-0 bg-list w-full z-50 transition-all -translate-x-full">
            <div class=" max-w-[1200px] mx-auto">
                <div class=" p-4">
                    <div class=" text-2xl">
                        <i class="fa-solid fa-xmark cursor-pointer hover:text-primary transition-all"
                            v-on:click="opensearch = !opensearch"></i>
                    </div>
                </div>
                <div class="p-2 mx-4">
                    <div class=" w-full flex justify-between items-center border-[1.5px] rounded-[100px] p-2">
                        <input type="text" name="" id="" class=" flex-1 pl-3" placeholder="Tìm kiếm tour du lịch"
                            v-model="keyword">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div class=" w-full shadow-2xl bg-white mt-2 rounded-md p-3" v-if="getsearch.length > 0">

                        <div>
                            <div class="pb-1 px-5 cursor-pointer hover:text-primary transition-all"
                                v-for="resuft in getsearch">
                                <router-link :to="{ name: 'detailtour', params: { id: resuft.id_tour } }"
                                    v-on:click="opensearch = !opensearch">
                                    <p>{{ resuft.name_tour }}</p>
                                </router-link>
                            </div>
                        </div>

                    </div>
                    <div class=" text-center mt-2" v-else>
                        
                        <p>Không tìm thấy kết quả</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end open search -->

        <!-- open bell -->
        <div :class="{ active: openbell }"
            class="bell fixed top-0 bottom-0 right-0 bg-list w-full z-50 transition-all translate-x-full">
            <div class=" max-w-[1200px] mx-auto ">
                <div class=" p-4">
                    <div class=" text-2xl">
                        <i class="fa-solid fa-xmark cursor-pointer hover:text-primary transition-all"
                            v-on:click="openbell = !openbell"></i>
                    </div>
                </div>
                <!-- warn -->
                <div class="p-2 mx-4" v-if="token == 0">
                    <div class=" text-center">
                        <div class=" flex justify-center">
                            <div
                                class=" w-[45px] h-[45px] rounded-[50%] text-primary bg-white shadow-xl flex text-2xl mb-3">
                                <i class="fa-brands fa-vuejs m-auto"></i>
                            </div>
                        </div>
                        <div>
                            <p>Chào mừng bạn đến với Laravel VueJs</p>
                            <p>Đăng nhập để nhận thông báo mới nhất</p>
                        </div>
                        <div class=" flex justify-center my-2" v-on:click="openbell = !openbell">
<<<<<<< HEAD
                            <RouterLink :to="{name:'login'}"><button
=======
                            <RouterLink to="/dang-nhap"><button
>>>>>>> 9a96fc5db7b0ff97f2ea7c9dc42e86318be0ab06
                                    class=" py-2 px-7 bg-primary text-white rounded-md hover:bg-hover-primary transition-all">Đăng
                                    Nhập</button></RouterLink>
                        </div>
                        <div class=" mt-3">Chưa có tài khoản ? <span
                                class=" text-primary cursor-pointer hover:text-hover-primary transition-all">
<<<<<<< HEAD
                                <RouterLink :to="{name:'register'}"><span v-on:click="openbell = !openbell">Đăng kí ngay</span>
=======
                                <RouterLink to="/dang-ki"><span v-on:click="openbell = !openbell">Đăng kí ngay</span>
>>>>>>> 9a96fc5db7b0ff97f2ea7c9dc42e86318be0ab06
                                </RouterLink>
                            </span></div>
                    </div>
                </div>
                <!-- end warn -->
                <div class=" p-2 mx-4" v-else>
                    <div class=" flex items-center shadow-lg py-3 pr-2">
                        <div class="max-w-[50px] md:max-w-[70px] mr-6 ml-2"><img
                                src="https://huanapi.000webhostapp.com/image/noti2.jpg" alt="" class="rounded-[50%]"></div>
                        <div class="">
                            <p><b>💥Tour du lịch Miền Tây</b></p>
                            <p>😱 Thử thách ăn sập chợ nổi trải nghiệm đáng nhớ</p>
                        </div>
                    </div>
                    <div class=" flex items-center shadow-lg py-3 pr-2">
                        <div class="max-w-[50px] md:max-w-[70px] mr-6 ml-2"><img
                                src="https://huanapi.000webhostapp.com/image/noti1.jpg" alt="" class="rounded-[50%]"></div>
                        <div class="">
                            <p><b>💥Tour du lịch Sài Gòn</b></p>
                            <p>Người dân thành phố thân thiện đáng sống bậc nhất</p>
                        </div>
                    </div>
                    <div class=" flex items-center shadow-lg py-3 pr-2">
                        <div class="max-w-[50px] md:max-w-[70px] mr-6 ml-2"><img
                                src="https://huanapi.000webhostapp.com/image/noti3.jpg" alt="" class="rounded-[50%]"></div>
                        <div class="">
                            <p><b>💥Tour du lịch Phú Quốc</b></p>
                            <p>😱 Trải nghiệm những khu vui chơi giải trí hàng đầu </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end open bell -->
    </div>
</template>
<script>
import { reactive, toRefs, ref, watch } from 'vue'
import useCate from '../../store/cate/getcate'
import useSearch from '../../store/tour/search'
import { UserStore } from "../../store/auth/UserStore";
import { mapState } from 'pinia'
import { createToast } from 'mosha-vue-toastify';
export default {
    computed: {
        ...mapState(UserStore, ['token'])
    },
    setup() {

        const toggle_header = reactive({
            openbar: false,
            opensearch: false,
            openbell: false,

        });

        const logout = () => {
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            axios.post('https://huanapi.000webhostapp.com/api/logout')
                .then((result) => {
                    store.removeToken('token')
                    createToast('Đăng xuất thành công', { type: 'success', timeout: 3000 })

                }).catch((err) => {
                    console.log(err)
                });
        }
        const { cate, getcate } = useCate()
        getcate()
        const { getsearch, fetch_search, keyword, loading } = useSearch()
        fetch_search()
        const store = UserStore()
        return {
            loading,
            logout,
            store,
            getsearch,
            keyword,
            cate,
            ...toRefs(toggle_header),
        };
    },

}
</script>

