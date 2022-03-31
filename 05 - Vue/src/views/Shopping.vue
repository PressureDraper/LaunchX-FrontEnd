<template>
    <!-- <div class="home">
        <HelloWorld msg="How much time to charge"/>
    </div> -->
    <AdminHeader/>
    <h1>Welcome To AstroCake</h1>
    <NavShop/>
    <Form/>
    <FooterGeneral/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import NavShop from '@/components/NavShop.vue'
import Form from '@/components/Form.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'

export default {
    name: 'Shopping',
    components: {
        AdminHeader,
        NavShop,
        Form,
        FooterGeneral,
    }
}
</script>