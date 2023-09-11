import { ref } from 'vue'
export default ()=>{
        const user = ref({})
        const getuser = () => {
            window.axios.defaults.headers.common['authorization']=`Bearer ${localStorage.getItem('token')}`
            axios.get('http://127.0.0.1:8000/api/user')
                .then((response) => {

                    user.value=response.data
                }).catch((err) => {
                   
                });
        }
        getuser()
        return {
            user,
            getuser
        }
    
}