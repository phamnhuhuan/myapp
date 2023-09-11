<template>
    <div class=" max-w-[1230px] mx-auto px-[15px] mb-3">
        <form @submit.prevent="login">
            <div class=" max-w-[510px] border-[1.5px] rounded-xl border-primary mx-auto p-4 sm:p-7">
                <div class=" text-center text-primary text-[20px] font-medium">Tài Khoản</div>
                <div class="auth_form my-5 sm:my-7">
                    <i class="fa-solid fa-envelope icon_input"></i>
                    <input type="text" placeholder="Gmail" class=" flex-1" v-model="email">
                </div>
                <div class=" -my-5 text-error p-1" v-if="err_login.email">
                <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_login.email[0] }}
                </div>
                <div class="auth_form my-5 sm:my-7">
                    <i class="fa-solid fa-unlock-keyhole icon_input"></i>
                    <input type="password" placeholder="Mật khẩu" class=" flex-1" v-model="password">
                </div>
                <div class=" -mt-5 mb-2 text-error p-1" v-if="err_login.password"><i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_login.password[0] }}</div>
                <div><button type="submit"
                        class="  w-full text-white text-center bg-primary py-2 rounded-[100px] hover:bg-hover-primary transition-all">Đăng
                        nhập</button></div>
                        <div class=" mt-3 text-error" v-if="errors">
                <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ errors }}
                </div>
                <div class=" mt-3">Chưa có tài khoản ? <span
                        class=" text-primary cursor-pointer hover:text-hover-primary transition-all">
                        <RouterLink :to="{name:'register'}">Đăng kí ngay</RouterLink>
                    </span>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { reactive, toRefs, ref } from 'vue'
import { UserStore} from "../../store/auth/UserStore";
import { useRouter } from "vue-router";
import { createToast } from 'mosha-vue-toastify';
export default {
    setup() {
        const form = reactive({
            email: '',
            password: '',
        })
        const store=UserStore()
        const errors=ref('')
        const router = useRouter()
        const err_login = ref({})
        const login = () => {
            axios.post('https://huanapi.000webhostapp.com/api/login', form)
                .then((response) => {
                    if (response.data.status === false) {
                        createToast('Sai tài khoản hoặc mật khẩu',{type:'danger',timeout:3000})
                    }
                    else{
                        store.setToken(response.data.token)
                        router.push({ name: 'home' })
                    }
                    form.email = ''
                    form.password = ''
                    err_login.value.email = ''
                    err_login.value.password = ''
                }).catch((error) => {
                    err_login.value = error.response.data.errors
                    console.log(error)
                });
        }
        return {
            store,
            errors,
            router,
            err_login,
            login,
            ...toRefs(form),
        }
    }
}
</script>