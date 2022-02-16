<template>
  <div id="home" class="home">
    <header class="header-bar">
      <img src="@/assets/logo.png" alt="" />
    </header>
    <div class="main-view">
      <video
        preload="metadata"
        style="
          object-fit: cover;
          object-position: center center;
          position: absolute;
          width: 100%;
          height: 100%;
        "
        playsinline
        play
        autoplay
        loop
        muted
        data-object-fit="cover"
        data-object-position="center center"
      >
        <source src="@/assets/videos/movie2.mp4" type="video/mp4" />
      </video>
      <div class="login-form">
        <div class="login">
          <div class="mb-3 row">
            <p>Logowanie</p>
            <label for="staticEmail" class="col-sm-2 col-form-label"
              >Email</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                v-model="email"
                class="form-control"
                id="staticEmail"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label"
              >Password</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn btn-primary mb-3 m-2"
              @click="login"
            >
              Zaloguj sie
            </button>
            <button
              @click="$router.push('/signup')"
              type="submit"
              class="btn btn-primary mb-3 m-2"
            >
              Rejestracja
            </button>
          </div>
          <div style="color: red" class="p-1">{{ error }}</div>
        </div>
      </div>
      <div
        style="
          height: 30%;
          width: 100%;
          contain: content;
          background-color: rgba(0, 0, 0, 0.5);
        "
      >
        <div :class="checkWindowWidth()">
          Witaj przywoływaczu godnego życia. Kurwa GWARANTUJE CI, że wyjdziesz
          na ludzi jeśli zalogujesz sie na tej stronie. Rozwój osobisty,
          pomnażanie zainteresowań, poszerzeanie swojej wiedzy z wielu dziedziń
          - będziesz jak pierdolony Elon Musk albo jeszcze lepiej. Masz dość
          ludzi, którzy tylko narzekają, że nic im nie wychodzi? To ŚWIETNIE SIE
          SKŁADA, bo od teraz będziesz miał ich dość i będziesz nimi gardził!
          Jesteś pierdolonym Bilem Gejtsem, Cukierbergiem, Jefem Bezosem i
          Władimirem Putinem w jednym! Przed tobą oczywiście długa, droga
          logowanie na tej stronie to pierwszy mały krok dla Ciebie, ale W CHUJ
          ogromny dla ludzkości.
        </div>
      </div>
    </div>

    <!-- Email: <input type="text" v-model="email" /><br />
    password: <input type="password" v-model="password" />
    <button @click="login">login</button>
    {{ error }} -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      windowWidth: window.innerWidth,
    };
  },
  created() {
    window.addEventListener("resize", this.resizeWindow);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
  },
  methods: {
    resizeWindow() {
      let itm = document.getElementById("home")?.getBoundingClientRect();
      this.windowWidth = itm.width;
    },
    checkWindowWidth() {
      console.log("HALO", this.windowWidth);
      if (this.windowWidth > 1400) {
        return "description";
      } else {
        return "description2";
      }
    },
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/login", user).then(
        (res) => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/");
          }
        },
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables";
.btn-primary {
  background-color: #5628c0;
}
.btn-primary:hover {
  background-color: #704ec0;
}
.login {
  font-family: "Cairo", sans-serif;
  position: relative;
  padding: 4%;
  width: 100%;
  background-color: white;
  border-radius: 24px;
}
.home {
  overflow-y: hidden;
  overflow-x: hidden;
  font-family: "Cairo", sans-serif;
  position: absolute;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  justify-content: center;
}
.header-bar {
  background-color: $secondary;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.main-view {
  position: relative;
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 90%;
}
.description {
  font-family: "Cairo", sans-serif;
  text-align: center;
  width: 100%;
  padding: 2%;
  color: white;
  font-size: 1.5rem;
  position: relative;
}
.description2 {
  font-family: "Cairo", sans-serif;
  text-align: center;

  padding: 2%;
  color: white;
  font-size: 1.5rem;
  position: relative;

  animation-name: move;
  animation-duration: 18s;
  animation-iteration-count: infinite;
  animation-direction: bottom;
  animation-timing-function: linear;
}
.login-form {
  margin-top: 3%;
  padding: 2%;
  min-width: 300px;
  width: 50%;
}
@keyframes move {
  0% {
    transform: translateY(200px);
  }
  100% {
    transform: translateY(-600px);
  }
}
</style>
