<template>
  <div class="signup">
    <header class="header-bar">
      <div style="padding: 12px" class="bg-primary text-white">Human RPG</div>
    </header>
    <div class="main-view">
      <div class="greetings-container">hello</div>
      <div class="login-form">
        <div class="login">
          <p>Rejestracja</p>
          <div class="mb-3 row">
            <label for="staticName" class="col-sm-2 col-form-label"
              >Nazwa</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                v-model="name"
                class="form-control"
                id="staticName"
              />
            </div>
          </div>
          <div class="mb-3 row">
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
            <div class="col-sm-8">
              <input
                :type="passwordMode"
                v-model="password"
                class="form-control"
                id="inputPassword"
              />
            </div>
            <div class="col-sm-1">
              <button
                type="button"
                class="btn btn-danger"
                @click="changePasswordMode(passwordMode)"
              >
                <svg
                  v-if="passwordMode == 'password'"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
                  />
                </svg>
                <svg
                  v-if="passwordMode == 'text'"
                  style="width: 24px; height: 24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="staticAvatar" class="col-sm-2 col-form-label"
              >Avatar</label
            >
            <div class="col-sm-10">
              <input
                @change="storeAvatar"
                type="file"
                class="form-control"
                id="staticAvatar"
              />
            </div>
          </div>
          <div class="col-auto">
            <button
              type="submit"
              class="btn btn-primary mb-3 m-2"
              @click="$router.push('/login')"
            >
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z"
                />
              </svg>
            </button>
            <button
              type="submit"
              class="btn btn-primary mb-3 m-2"
              @click="signup"
            >
              Zarejestruj konto
            </button>
          </div>
          <div style="color: red" class="p-1">{{ error }}</div>
        </div>
      </div>
    </div>
    <!-- Name: <input v-model="name" type="text" /><br />
    email: <input v-model="email" type="text" /><br />
    password: <input v-model="password" type="text" /><br />
    <button @click="signup">signup</button>
    {{ error }} -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      passwordMode: "password",
      name: "",
      email: "",
      password: "",
      error: "",
      avatar: null,
    };
  },
  methods: {
    storeAvatar: function (event) {
      console.log(event.target.files);
      this.avatar = event.target.files[0];
    },
    changePasswordMode(mode) {
      switch (mode) {
        case "password":
          this.passwordMode = "text";
          break;
        case "text":
          this.passwordMode = "password";
          break;
      }
    },
    signup() {
      const fd = new FormData();
      fd.append("image", this.avatar, this.avatar.name);
      console.log("FD", fd.get("image"));
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        avatar: fd,
      };
      axios.post("http://localhost:5000/signup", fd, newUser).then(
        (res) => {
          console.log(res);
          this.error = "";
          this.$router.push("/login");
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
.signup {
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
