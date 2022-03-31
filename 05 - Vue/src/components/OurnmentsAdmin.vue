<template>
    <h2>Ournments</h2>
    <ul>
        <li>Disney Cake Topper: { num }</li>
        <li>Wedding Cake Topper: { num }</li>
        <li>Wedding Cake Topper V2: { num }</li>
        <li>Mickey Mouse Cake Topper: { num }</li>
        <li>Siren Cake Topper: { num }</li>
        <li>Curtain Cake: { num }</li>
    </ul>
    <!-- <div class="hello">
        <h1>{{ msg }}</h1>
    </div> -->
</template>

<script>
export default {
    name: 'OurnmentsAdmin',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        list-style: none;
    }
</style>