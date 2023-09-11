import {ref } from 'vue'
export default ()=>{
    const tour = ref([])
    const loading = ref(true)
    const gettour = () => {
       axios.get('https://huanapi.000webhostapp.com/api/tour')
          .then((response) => {
            setTimeout(() => {
               loading.value = false
           }, 1000)
             tour.value = response.data.tour
             
          }).catch((err) => {
             console.log(err)
          });
    }
       
        return {
         loading,
            tour,
            gettour,
        };
}
