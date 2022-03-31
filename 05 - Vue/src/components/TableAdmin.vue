<template>
    <h2>Orders</h2>
    <table style="width: 100%;">
        <tr>
            <th># Order</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Specs</th>
            <th>Flavors</th>
            <th>Ournments</th>
        </tr>
        <tr>
            <td align="center">{ num }</td>
            <td align="center">Claire Redfield</td>
            <td align="center">2281932145</td>
            <td align="center">claire_rd@gmail.com</td>
            <td align="center">Medium size, i'll pick it up at 4:00 PM</td>
            <td align="center">
                <li>Mocha</li>
                <li>Peach</li>
            </td>
            <td align="center">
                <li>Wedding Cake Topper</li>
                <li>Wedding Cake Topper V2</li>
            </td>
        </tr>
    </table><br><br>
    <!-- <div class="hello">
        <h1>{{ msg }}</h1>
    </div> -->
</template>

<script>
export default {
    name: 'TableAdmin',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    table, th, td {
        border: 1px solid black;
    }
    li {
        list-style: none;
    }
</style>