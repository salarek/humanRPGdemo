<template>
  <div class="home">
    <header class="header-bar">
      <div style="padding: 12px" class="bg-primary text-white">Human RPG</div>
    </header>
    <div class="main-view">
      <div class="greetings-container">hello</div>
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
    };
  },
  methods: {
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
.login {
  position: relative;
  padding: 4%;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 24px;
}
.home {
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
}
.main-view {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.greetings-container {
  padding: 2%;
  min-width: 300px;

  width: 50%;
}
.login-form {
  position: relative;
  padding: 2%;
  min-width: 300px;

  width: 50%;
}
</style>
