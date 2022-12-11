<template>
  <div id="app">
    <h3 :class="addClass ? 'textColorRed' : 'textColorBlack'">
      Result:{{ counter }}
    </h3>
    <button @click="counter += 1">+</button>
    <button @click="counter -= 1">-</button>
    <!-- <HelloWorld msg="sayHello" /> -->
  </div>
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  props: {
    getTestProps: {
      type: String,
      default: "Fuck you",
    },
  },

  data() {
    return {
      counter: 0,
      addClass: false,
    };
  },
  watch: {
    counter(value) {
      if (value === 1) {
        this.addClass = true;
        return;
      }
      this.addClass = false;
    },
  },
};
</script>

<style>
.textColorRed {
  color: red;
}

.textColorBlack {
  color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
