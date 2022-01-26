<template>
  <div class="landing">
    <div :style="{ width: sidebarWidth }" class="sidebar">dupa</div>
    <div class="content">
      <header class="header-bar">
        <button
          style="background-color: transparent; border: none"
          @click="switchSidebar"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
            />
          </svg>
        </button>
        <div style="height: 100%; font-size: 20px; padding: 15px">
          Witaj! {{ name }}
        </div>
        <button
          style="
            background-color: transparent;
            position: absolute;
            height: 10%;
            right: 0px;
            border: none;
          "
          @click="logout"
        >
          <svg style="width: 34px; height: 34px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"
            />
          </svg>
        </button>
        <!-- <div style="padding: 12px" class="bg-primary text-white">Human RPG</div> -->
      </header>
      <div class="main-view">
        <achievments :username="name" :level="level" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Achievments from "./Achievments.vue";
export default {
  components: { Achievments },
  name: "landing",
  data() {
    return {
      sidebarWidth: "300px",
      showSideBar: true,
      name: "",
      email: "",
      level: 0,
      processlevel: 0,
      categories: "",
      items: "",
      activity: 0,
    };
  },
  watch: {
    sidebarWidth: function () {
      console.log(" XDDDDD");
      if (window.innerWidth < window.innerHeight) this.sidebarWidth = "100px";
    },
  },
  methods: {
    switchSidebar() {
      this.showSideBar = !this.showSideBar;
      if (this.showSideBar) {
        this.sidebarWidth = "300px";
      } else {
        this.sidebarWidth = "100px";
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    axios
      .get("http://localhost:5000/user", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res);
        this.name = res.data.user.name;
        this.email = res.data.user.email;
        this.level = res.data.user.level;
        this.processlevel = res.data.user.processlevel;
        this.categories = res.data.user.categories;
        this.items = res.data.user.items;
        this.activity = res.data.user.activity;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables";
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");

.landing {
  font-family: "Cairo", sans-serif;
  position: absolute;
  background-color: $primary;
  width: 100vw;
  height: 100vh;
  display: flex;
}
.content {
  position: relative;
  width: 100%;
}
.header-bar {
  background-color: rgb(59, 175, 113);
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-color: green;
  border-bottom-style: solid;
}
.main-view {
  font-family: "Cairo", sans-serif;
  font-size: 2rem;
  position: absolute;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.sidebar {
  // background-color: rgb(0, 26, 255);
  color: white;
  font-size: 1.3rem;
  background-color: $secondary;
  padding: 10px;
  height: 100vh;
  transition: all 0.5s;
}
</style>
