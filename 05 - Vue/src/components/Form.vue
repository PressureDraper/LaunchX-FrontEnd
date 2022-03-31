<template>
    <form action="./shopping.html">
        <fieldset>
            <legend>Place your Order</legend>
            <label for="name">Name:</label><br>
            <input type="text" id="name"><br><br>

            <label for="phone">Phone:</label><br>
            <input type="tel" name="tel" maxlength="10" id="phone"><br><br>

            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email"><br><br>

            <label for="specs">Specifications:</label><br>
            <textarea name="specs" id="specs" cols="30" rows="5" style="resize: none;"></textarea><br><br>

            <label for="flavors">Select your Flavors (2 max):</label><br>
            <input class="single-checkbox" type="checkbox" value="Mocha" id="mocha">
            <label for="mocha">Mocha</label>
            <input class="single-checkbox" type="checkbox" value="Cajeta" id="cajeta">
            <label for="cajeta">Cajeta</label>
            <input class="single-checkbox" type="checkbox" value="Strawberry" id="strawberry">
            <label for="strawberry">Strawberry</label><br><br>
            <input class="single-checkbox" type="checkbox" value="Peach" id="peach">
            <label for="peach">Peach</label>
            <input class="single-checkbox" type="checkbox" value="cm" id="cm">
            <label for="cm">Chocolate Mint</label>
            <input class="single-checkbox" type="checkbox" value="Truffle" id="truffle">
            <label for="truffle">Truffle</label><br><br>

            <label for="flavors">Select your Ournments (2 max):</label><br>
            <input class="single-checkbox2" type="checkbox" value="dct" id="dct">
            <label for="dct">Disney Cake Topper</label>
            <input class="single-checkbox2" type="checkbox" value="wct" id="wct">
            <label for="wct">Wedding Cake Topper</label>
            <input class="single-checkbox2" type="checkbox" value="wct2" id="wct2">
            <label for="wct2">Wedding Cake Topper V2</label><br><br>
            <input class="single-checkbox2" type="checkbox" value="mmctp" id="mmctp">
            <label for="mmctp">Mickey Mouse Cake Topper</label>
            <input class="single-checkbox2" type="checkbox" value="sctp" id="sctp">
            <label for="sctp">Siren Cake Topper</label>
            <input class="single-checkbox2" type="checkbox" value="cc" id="cc">
            <label for="cc">Curtain Cake</label><br><br><br>
            
            <input type="submit" value="Submit">
        </fieldset>
    </form>
    <br><br>
    <!-- <div class="hello">
        <h1>{{ msg }}</h1>
    </div> -->
</template>

<script>import { limit } from "@/helpers/limit"

export default {
    name: 'Form',
    mounted() {
        limit()
    },
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>