import {ref,watch} from 'vue'
export default ()=>{
    {
        const getsearch = ref([])
        const loading = ref(true)
        const fetch_search = () => {
         axios.get('https://huanapi.000webhostapp.com/api/search')
            .then((response) => {
               setTimeout(() => {
                  loading.value = false
              }, 5000)
               getsearch.value = response.data.tour;
            })
            .catch(function (error) {
               console.log(error);
            })
      }
      const keyword = ref("")
      watch(keyword, (newValue, oldValue) => {
         axios.get('https://huanapi.000webhostapp.com/api/search', { params: { search: keyword.value } })
            .then((response) => {
               setTimeout(() => {
                  loading.value = false
              }, 5000)
               getsearch.value = response.data.tour;
               console.log(response)
            })
            .catch(function (error) {
               console.log(error);
            })
      })
        return {
            loading,
            getsearch,
            fetch_search,
            keyword,   
        };
    }
}