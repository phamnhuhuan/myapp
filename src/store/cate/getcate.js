import {ref } from 'vue'
export default ()=>{
        const cate = ref([])
        const getcate = () => {
            axios.get('https://huanapi.000webhostapp.com/api/cate')
                .then((response) => {
                    cate.value = response.data.cate
                }).catch((err) => {
                    console.log(err)
                });
        }
        return {
            cate,
            getcate
        };
    

}
