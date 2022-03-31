<template>
    <h2>Flavors</h2>
    <ul>
        <li>Mocha: { num }</li>
        <li>Cajeta: { num }</li>
        <li>Strawberry: { num }</li>
        <li>Peach: { num }</li>
        <li>Chocolate Mint: { num }</li>
        <li>Truffle: { num }</li>
    </ul>
    <!-- <div class="hello">
        <h1>{{ msg }}</h1>
    </div> -->
</template>

<script>
export default {
    name: 'FlavorsAdmin',
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