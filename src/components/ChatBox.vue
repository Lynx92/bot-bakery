<template>
  <section class="chat-box">
    <div class="chat-box-list-container">
      <ul class="chat-box-list">
        <li class="message" v-for="(message, idx) in messages" :key="idx">
          <p>
            <span> {{ message.text }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="chat-inputs">
      <input
        v-if="messages.length < 2"
        type="text"
        v-model="personName"
        @keyup.enter="sendName"
      />
    </div>
    <div class="chat-btns" v-if="userSelect">
      <button @click="userSelectYes()">SI</button>
      <button @click="userSelectNo()">No</button>
    </div>

    <div>{{ foodDay }}</div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatBox",
  data: () => ({
    personName: null,
    messages: [{ text: "Hola, ¿como te llamas?" }],
    foodDay: "",
    dialogs: {
      bot: [
        "Encantado de conocerte ",
        "Yo soy Pastelito-Bot",
        "Por cierto, ¿tienes hambre?"
      ],
      human: [],
      step: 0
    },
    userSelect: false,
    time: null
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
        .catch(err => {
          this.foodDay = "Nada";
          console.error("Error en coger de la API la comida", err);
        });
    },

    sendName() {
      this.messages.push({
        text: `Me llamo ${this.personName}`
      });

      this.time = setInterval(() => {
        this.nextDialog();

        if (this.dialogs.step == 3) {
          this.stopStep();
          this.userSelect = true;
        }
      }, 2000);
    },

    stopStep() {
      clearInterval(this.time);
    },

    async userSelectYes() {
      await this.getFoodDay();
      this.messages.push({
        text: `Seguro que te gusta esto: ${this.foodDay}`
      });
      this.userSelect = false;
    },

    userSelectNo() {
      this.messages.push({
        text:
          "¿Seguro que no?, tengo unas sugerencias que te haran la boca agua!"
      });
      this.userSelect = true;
    },

    nextDialog() {
      if (this.dialogs.step == 0) {
        this.messages.push({
          text: this.dialogs.bot[this.dialogs.step] + this.personName
        });
        this.dialogs.step++;
      } else {
        this.messages.push({
          text: this.dialogs.bot[this.dialogs.step]
        });
        this.dialogs.step++;
      }
    }
  }
};
</script>

<style scoped></style>
