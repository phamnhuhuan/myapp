<template>
    <div>tao tin moi
        <form @submit.prevent="create_news">
            <input type="text" v-model="name_news" class=" border w-full">
            <ckeditor v-model="content_news" class=" my-5"></ckeditor>
            <input type="file" ref="reload" name="" id="file" v-on:change="onChange">
            <div v-if="img_news">
                <div class=" max-w-[50px]"><img v-bind:src="imgPreview" /></div>
            </div>
            <button type="submit" class=" border">them tin tuc</button>
        </form>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { component as ckeditor } from '@mayasabha/ckeditor4-vue3'
export default {
    setup() {
        const form = reactive({
            name_news: '',
            content_news: '',
            img_news: '',
            imgPreview: null
        })
        const onChange = (e) => {
            form.img_news = e.target.files[0];
            let reader = new FileReader();
            reader.addEventListener("load", function () {
                form.imgPreview = reader.result;
            }.bind(form), false);
            if (form.img_news) {
                if (/\.(jpe?g|png|gif)$/i.test(form.img_news.name)) {
                    reader.readAsDataURL(form.img_news);
                }
            }
        }
        const create_news = () => {
            const formData = new FormData();
            formData.append('name_news', form.name_news);
            formData.append('content_news', form.content_news);
            formData.append('file', form.img_news);
            axios.post('http://localhost/travelapi/api/new', formData)
                .then(response => {
                    form.img_news = ''
                    form.imgPreview = ''
                    console.log(response)
                })
                .catch(function (error) {
                    console.log(error)
                });

        }

        return {
            create_news,
            onChange,
            ...toRefs(form),
        }
    }
}
</script>
