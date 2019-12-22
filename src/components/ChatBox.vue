<template>
  <section class="chat-box">
    <img class="botimg" src="../assets/bot.png" alt="bot" />
    <h1 class="title">PASTELITO-BOT</h1>
    <div class="chat-box-list-container">
      <ul class="chat-box-list">
        <li class="message" v-for="(message, idx) in messages" :key="idx">
          <p :class="message.type">
            <span :class="message.author"> {{ message.text }}</span>
          </p>
        </li>
      </ul>
    </div>
    <div v-if="messages.length < 2" class="chat-inputs row justify-center">
      <q-input
        type="text"
        class="col-3"
        color="#68a0ba"
        clearable
        filled
        v-model="personName"
        @keyup.enter="sendName"
      />
    </div>
    <div class="chat-btns q-gutter-sm row justify-center" v-if="userSelect">
      <q-btn class="col-2" color="red-5" @click="userSelectNo()" label="No" />
      <q-btn
        class="col-2"
        color="green-5"
        @click="userSelectYes()"
        label="SI"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatBox",
  data: () => ({
    personName: null,
    messages: [{ text: "Hola, ¿como te llamas?", author: "bot", type: "left" }],
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
    sendName() {
      this.messages.push({
        text: `Me llamo ${this.personName}`,
        author: "human",
        type: "right"
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

    userSelectYes() {
      this.userSelect = false;
      this.messages.push({
        text: "Si, ¡me muero de hambre!",
        author: "human",
        type: "right"
      });
      setTimeout(() => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://xz94zfs6u8.execute-api.eu-west-1.amazonaws.com/default/myBakery"
          )
          .then(res => {
            let foodDay =  res.data
            this.messages.push({
              text: `¡Seguro que te gusta un buen ${foodDay}!`,
              author: "bot",
              type: "left"
            });
          })
          .catch(err => {
            console.error("Error en coger de la API la comida", err);
            this.userSelect = true;
            this.messages.push({
              text: '¡Ups! parece que tengo un error en mis circuitos, espera un rato hasta que lo arregle',
              author: "bot",
              type: "left"
            });
          });
      }, 2000);
    },

    userSelectNo() {
      this.messages.push({
        text: "No tengo mucha hambre",
        author: "human",
        type: "right"
      });
      setTimeout(() => {
        this.messages.push({
          text:
            "¿Seguro que no?, ¡tengo unas sugerencias que te haran la boca agua!",
          author: "bot",
          type: "left"
        });
      }, 2000);

      this.userSelect = true;
    },

    nextDialog() {
      if (this.dialogs.step == 0) {
        this.messages.push({
          text: this.dialogs.bot[this.dialogs.step] + this.personName,
          author: "bot",
          type: "left"
        });
        this.dialogs.step++;
      } else {
        this.messages.push({
          text: this.dialogs.bot[this.dialogs.step],
          author: "bot",
          type: "left"
        });
        this.dialogs.step++;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');

.botimg {
  width: 10rem;
  height: 10rem;
  position: absolute;
  left: 5rem;
  top: 15rem;
  animation: float 5s ease-in-out infinite;
}

.title {
  animation: bounceInDown 2s;
  text-shadow: 6px 5px 7px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  font-family: 'Mansalva', cursive;
}
.chat-box {
  position: relative;
}
.chat-box-list-container {
  padding: 2rem 20rem;
}
.chat-box-list {
  padding-left: 0;
}
.message {
  list-style-type: none;
}

.message .left {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  animation: bounceInLeft 2s;
}

.message .bot {
  background-color: #f0eeb6;
  padding: 1rem;
  border-radius: 10px;
  text-align: left;
  box-shadow: 4px 5px 5px 4px rgba(0, 0, 0, 0.3);
}

.message .right {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  animation: bounceInRight 2s;
}

.message .human {
  background-color: #68a0ba;
  padding: 1rem;
  border-radius: 10px;
  color: aliceblue;
  box-shadow: 4px 5px 5px 4px rgba(0, 0, 0, 0.3);
}

.chat-inputs {
  animation: bounceInUp 2s;
}
.chat-inputs input .col-3 {
  max-width: 50rem;
}

.chat-btns {
  animation: bounceInUp 4s;
}

@keyframes bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }

  75% {
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    transform: translate3d(5px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    transform: translate3d(10px, 0, 0);
  }

  90% {
    transform: translate3d(-5px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }

  90% {
    transform: translate3d(0, -5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
