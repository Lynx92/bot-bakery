<template>
  <div id="app">
    <ChatBox />
  </div>
</template>

<script>
import ChatBox from "./components/ChatBox.vue";

export default {
  name: "app",
  components: {
    ChatBox
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  padding: 30px;
}

body {
  background: linear-gradient(to right, #ee9ca7, #ffdde1);
}
</style>
