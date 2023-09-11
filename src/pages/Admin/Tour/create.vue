<template>
    <div class="admin">tao tour
        <form @submit.prevent="create_tour">
            <p>ten</p>
            <input type="text" v-model="name_tour" class=" border" :class="{err_input:err_tour.name_tour}">
            <p style=" color: red;" v-if="err_tour.name_tour">{{ err_tour.name_tour[0] }}</p>
            <p>gia</p>
            <input type="text" v-model="price" class=" border">
            <p style=" color: red;" v-if="err_tour.price">{{ err_tour.price[0] }}</p>
            <p>hinhanh</p><br>
            <p style=" color: red;" v-if="err_tour.img_tour">{{ err_tour.img_tour[0] }}</p>
            <input type="file" name="" v-on:change="onChange">
            <div v-if="img_tour">
                <div class=" max-w-[50px]"><img v-bind:src="imgPreview" /></div>
            </div>
            
            <p>thong tin</p>
            <ckeditor v-model="infor"></ckeditor>
            <p style=" color: red;" v-if="err_tour.infor">{{ err_tour.infor[0] }}</p>
            <p>tong quan</p>
            <ckeditor v-model="about"></ckeditor>
            <p style=" color: red;" v-if="err_tour.about">{{ err_tour.about[0] }}</p>
            <p>hinhanh map</p><br>
            <input type="file" name="" v-on:change="onChangemap">
            <p style=" color: red;" v-if="err_tour.map">{{ err_tour.map[0] }}</p>
            <div v-if="img_map">
                <div class=" max-w-[50px]"><img v-bind:src="imgPreviewMap" /></div>
            </div>
            <select name="" id="" v-model="id_cate" class=" border">
                <option value="1">mien tay</option>
                <option value="2">phu quoc</option>
                <option value="3">sai gon</option>
            </select>
            <p style=" color: red;" v-if="err_tour.id_cate">{{ err_tour.id_cate[0] }}</p>
            <button type="submit" class=" border">them tour</button>
        </form>
    </div>
</template>
<script>
import { reactive, ref, toRefs } from 'vue'
import { component as ckeditor } from '@mayasabha/ckeditor4-vue3'
export default {
    setup() {
        const form = reactive({
            name_tour: '',
            price:'',
            img_tour: '',
            img_map: '',
            infor: '',
            about:'',
            id_cate:[],
            imgPreview: null,
            imgPreviewMap:null
        })
        const onChange = (e) => {
            form.img_tour = e.target.files[0];
            let reader = new FileReader();
            reader.addEventListener("load", function () {
                form.imgPreview = reader.result;
            }.bind(form), false);
            if (form.img_tour) {
                if (/\.(jpe?g|png|gif)$/i.test(form.img_tour.name)) {
                    reader.readAsDataURL(form.img_tour);
                }
            }
        }
        const onChangemap = (e) => {
            form.img_map = e.target.files[0];
            let reader_map = new FileReader();
            reader_map.addEventListener("load", function () {
                form.imgPreviewMap = reader_map.result;
            }.bind(form), false);
            if (form.img_map) {
                if (/\.(jpe?g|png|gif)$/i.test(form.img_map.name)) {
                    reader_map.readAsDataURL(form.img_map);
                }
            }
        }
       const err_tour=ref({})
        const create_tour = () => {
            const formData = new FormData();
            formData.append('name_tour', form.name_tour);
            formData.append('price', form.price);
            formData.append('infor', form.infor);
            formData.append('about', form.about);
            formData.append('file', form.img_tour);
            formData.append('id_cate', form.id_cate);
            formData.append('map', form.img_map);
            axios.post('http://localhost/travelapi/api/tour/store', formData)
                .then(response => {
                    form.img_tour = ''
                    form.imgPreview = ''
                    console.log(response)
                })
                .catch(function (error) {
                    err_tour.value=error.response.data.errors
                    console.log(error)
                });

        }

        return {
            onChangemap,
            create_tour,
            onChange,
            err_tour,
            ...toRefs(form),
        }
    }
}
</script>

<style>
.err_input{
    border: 1px solid red;
}
</style>