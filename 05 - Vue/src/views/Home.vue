<template>
  <!-- <div class="home">
    <HelloWorld msg="How much time to charge"/>
  </div> -->
  <AdminHeader/>
  <h1>Welcome To AstroCake</h1>
  <NavHome/>
  <Introduce/>
  <FooterGeneral/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import NavHome from '@/components/NavHome.vue'
import Introduce from '@/components/Introduce.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'

export default {
  name: 'Home',
  components: {
    AdminHeader,
    NavHome,
    Introduce,
    FooterGeneral,
  }
}
</script>
