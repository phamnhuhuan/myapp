<template>
    <Header></Header>
    <RouterView>
    </RouterView>
    <Footer></Footer>
</template>
<script>
import Header from '../components/User/Header.vue'
import Footer from '../components/User/Footer.vue'
export default {
    components: {
        Header,
        Footer
    },
};
</script>