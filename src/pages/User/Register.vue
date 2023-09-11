<template>
    <div class=" max-w-[1230px] mx-auto px-[15px] mb-3">

       <form @submit.prevent="register">
        <div class=" max-w-[510px] border-[1.5px] rounded-xl border-primary mx-auto p-4 sm:p-7">
            <div class=" text-center text-primary text-[20px] font-medium">Đăng kí tài khoản</div>
            <div class="auth_form my-5 sm:my-7">
                <i class="fa-solid fa-circle-user icon_input"></i>
                <input type="text" placeholder="Tên đăng nhập" class=" flex-1" v-model="name">
            </div>
            <div class=" -my-5 text-error p-1" v-if="err_register.name">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_register.name[0] }}
                                </div>
            <div class="auth_form my-5 sm:my-7">
                <i class="fa-solid fa-envelope icon_input"></i>
                <input type="text" placeholder="Gmail" class=" flex-1" v-model="email">
            </div>
            <div class=" -my-5 text-error p-1" v-if="err_register.email">
                                    <i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_register.email[0] }}
                                </div>
            <div class="auth_form my-5 sm:my-7">
                <i class="fa-solid fa-unlock-keyhole icon_input"></i>
                <input type="password" placeholder="Mật khẩu" class=" flex-1" v-model="password">
            </div>
            <div class=" -mt-5 mb-2 text-error p-1" v-if="err_register.password"><i class="fa-solid fa-circle-exclamation mx-2"></i>{{ err_register.password[0] }}</div>
            <div><button type="submit"
                    class="  w-full text-white text-center bg-primary py-2 rounded-[100px] hover:bg-hover-primary transition-all">Tạo
                    tài khoản</button></div>
            <div class=" mt-3">Đã có tài khoản ? <span
                    class=" text-primary cursor-pointer hover:text-hover-primary transition-all">
                    <RouterLink :to="{name:'login'}">Đăng nhập</RouterLink>
                </span></div>
        </div>
    </form>
    </div>
</template>
<script>
import { reactive, toRefs ,ref} from 'vue'
import { createToast } from 'mosha-vue-toastify';
export default {
    setup() {
        const form = reactive({
            name: '',
            email: '',
            password: '',

        })
        const err_register=ref({})
        const register = () => {
            const formData = new FormData();
            formData.append('name', form.name);
            formData.append('email', form.email);
            formData.append('password', form.password);
            axios.post('https://huanapi.000webhostapp.com/api/register',formData)
            .then((result) => {
                createToast('Đăng kí thành công',{type:'success',timeout:3000})
                form.name=''
                form.email=''
                form.password=''
                err_register.value.name=''
                err_register.value.email=''
                err_register.value.password=''
            }).catch((err) => {
                err_register.value=err.response.data.errors
                console.log(err)
            });
        }
        
        return {
            err_register,
            register,
            ...toRefs(form),
        }
    }
}
</script>
