<template>
    <!-- <div class="home">
        <HelloWorld msg="How much time to charge"/>
    </div> -->
    <AdminHeader/>
    <h1>Welcome To AstroCake</h1>
    <NavOur/>
    <Ournments/>
    <FooterGeneral/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'
import NavOur from '@/components/NavOur.vue'
import Ournments from '@/components/Ournments.vue'

export default {
    name: 'Home',
    components: {
        AdminHeader,
        NavOur,
        FooterGeneral,
        Ournments,
    }
}
</script>