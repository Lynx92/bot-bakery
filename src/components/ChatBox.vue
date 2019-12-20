<template>
  <section class="chat-box">
    <div class="chat-box-list-container">
      <ul class="chat-box-list">
        <li class="message"></li>
      </ul>
    </div>
    <div class="chat-inputs">
      <input type="text" v-model="message" @keyup.enter="sendMessage" />
      <button @click="getFoodDay">Send</button>
    </div>
    <div>{{ foodDay }}</div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatBox",
  data: () => ({
    personName: "",
    message: "",
    foodDay: "",
    dialogs: {
      bot: ['Hello, What is your name?','Nice to meet you'],
      human: []
    }
  }),

  methods: {
    getFoodDay() {
      axios
        .get(
          "https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery"
        )
        .then(res => {
          this.foodDay = res.data;
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped></style>
