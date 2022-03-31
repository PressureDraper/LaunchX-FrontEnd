<template>
    <!-- <div class="home">
        <HelloWorld msg="How much time to charge"/>
    </div> -->
    <AdminHeader/>
    <h1>Welcome To AstroCake</h1>
    <NavFlav/>
    <Flavors/>
    <FooterGeneral/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import NavFlav from '@/components/NavFlav.vue'
import Flavors from '@/components/Flavors.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'

export default {
    name: 'Home',
    components: {
        AdminHeader,
        NavFlav,
        Flavors,
        FooterGeneral,
    }
}
</script>