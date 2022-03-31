<template>
  <!-- <div class="home">
    <HelloWorld msg="How much time to charge"/>
  </div> -->
  <!-- <AdminHeader/> -->
  <h1>Admin Panel</h1>
  <FlavorsAdmin/>
  <OurnmentsAdmin/>
  <TableAdmin/>
  <FooterGeneral/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AdminHeader from '@/components/AdminHeader.vue'
import FlavorsAdmin from '@/components/FlavorsAdmin.vue'
import OurnmentsAdmin from '@/components/OurnmentsAdmin.vue'
import TableAdmin from '@/components/TableAdmin.vue'
import FooterGeneral from '@/components/FooterGeneral.vue'

export default {
  name: 'AdminView',
  components: {
    AdminHeader,
    FlavorsAdmin,
    OurnmentsAdmin,
    TableAdmin,
    FooterGeneral,
  }
}
</script>
