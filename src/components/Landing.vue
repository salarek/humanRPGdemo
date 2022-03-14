<template>
  <div id="landing" class="landing">
    <div :style="{ width: sidebarWidth }" class="sidebar">
      <span class="m-1">MENU</span>
      <div style="padding-top: 100px"></div>
      <table style="width: 100%; margin: 0px; padding: 0px">
        <tr>
          <td class="p-1">
            <button
              type="submit"
              class="btn btn-primary m-1"
              @click="mode = 'achievments'"
            >
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                />
              </svg>
            </button>
          </td>
          <td>
            <span :class="{ hiddenspan: sidebarWidth == '100px' }"
              >Panel Główny</span
            >
          </td>
        </tr>
        <tr>
          <td class="p-1">
            <button
              type="submit"
              class="btn btn-primary m-1"
              @click="mode = 'categories'"
            >
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"
                />
              </svg>
            </button>
          </td>
          <td>
            <span :class="{ hiddenspan: sidebarWidth == '100px' }"
              >Twoje kategorie</span
            >
          </td>
        </tr>
        <tr>
          <td class="p-1">
            <button
              type="submit"
              class="btn btn-primary m-1"
              @click="mode = 'search-categories'"
            >
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16 12C16 10.9 16.9 10 18 10S20 10.9 20 12 19.1 14 18 14 16 13.1 16 12M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12M4 12C4 10.9 4.9 10 6 10S8 10.9 8 12 7.1 14 6 14 4 13.1 4 12M13 18C13 16.9 13.9 16 15 16S17 16.9 17 18 16.1 20 15 20 13 19.1 13 18M7 18C7 16.9 7.9 16 9 16S11 16.9 11 18 10.1 20 9 20 7 19.1 7 18M13 6C13 4.9 13.9 4 15 4S17 4.9 17 6 16.1 8 15 8 13 7.1 13 6M7 6C7 4.9 7.9 4 9 4S11 4.9 11 6 10.1 8 9 8 7 7.1 7 6"
                />
              </svg>
            </button>
          </td>
          <td>
            <span :class="{ hiddenspan: sidebarWidth == '100px' }"
              >Szukaj kategorii</span
            >
          </td>
        </tr>
        <tr>
          <td class="p-1">
            <button
              type="submit"
              class="btn btn-primary m-1"
              @click="mode = 'plan'"
            >
              <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16 12C16 10.9 16.9 10 18 10S20 10.9 20 12 19.1 14 18 14 16 13.1 16 12M10 12C10 10.9 10.9 10 12 10S14 10.9 14 12 13.1 14 12 14 10 13.1 10 12M4 12C4 10.9 4.9 10 6 10S8 10.9 8 12 7.1 14 6 14 4 13.1 4 12M13 18C13 16.9 13.9 16 15 16S17 16.9 17 18 16.1 20 15 20 13 19.1 13 18M7 18C7 16.9 7.9 16 9 16S11 16.9 11 18 10.1 20 9 20 7 19.1 7 18M13 6C13 4.9 13.9 4 15 4S17 4.9 17 6 16.1 8 15 8 13 7.1 13 6M7 6C7 4.9 7.9 4 9 4S11 4.9 11 6 10.1 8 9 8 7 7.1 7 6"
                />
              </svg>
            </button>
          </td>
          <td>
            <span :class="{ hiddenspan: sidebarWidth == '100px' }"
              >Plan Zajęć</span
            >
          </td>
        </tr>
      </table>
      <hr />
    </div>
    <div class="content">
      <header class="header-bar">
        <button
          style="
            background-color: transparent;
            position: absolute;
            height: 10%;
            left: 0px;
            border: none;
          "
          @click="switchSidebar"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z"
            />
          </svg>
        </button>

        <img src="@/assets/logo2.png" alt="" />
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
        <div v-if="mode == 'achievments'">
          <achievments :username="name" :level="level" :avatar="avatarImg" />
        </div>
        <div v-if="mode == 'categories'">
          <categories :username="name" :level="level" />
        </div>
        <div v-if="mode == 'search-categories'">
          <search-categories :username="name" :level="level" />
        </div>
        <div v-if="mode == 'plan'">
          <plan :username="name" :level="level" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Achievments from "./Achievments.vue";
import Categories from "./Categories.vue";
import SearchCategories from "./SearchCategories.vue";
import Plan from "./Plan.vue";
export default {
  components: { Achievments, Categories, SearchCategories, Plan },
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
      windowWidth: window.innerWidth,
      mode: "achievments",
    };
  },
  computed: {
    avatarImg: function () {
      console.log(this.avatar[0]);
      let name = this.avatar[0];
      console.log(name);
      let newName = name.substring(29, name.length);
      return newName;
    },
  },
  watch: {
    windowWidth: function () {
      console.log("XDDDDD");
      console.log(window.innerWidth);
      if (window.innerWidth < window.innerHeight) {
        this.sidebarWidth = "100px";
      } else {
        this.sidebarWidth = "300px";
      }
    },
  },
  methods: {
    resizeWindow() {
      let itm = document.getElementById("landing")?.getBoundingClientRect();
      this.windowWidth = itm.width;
    },

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
    window.addEventListener("resize", this.resizeWindow);
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
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
        this.avatar = res.data.user.avatar;
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
tr {
  font-size: 1rem;
}
tr:hover {
  background-color: rgba(0, 0, 0, 0.2);
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
  justify-content: center;
  border-width: 1px;
  border-color: green;
  border-bottom-style: solid;
}
.main-view {
  font-family: "Cairo", sans-serif;
  font-size: 2rem;
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar {
  // background-color: rgb(0, 26, 255);
  background-repeat: repeat-y;
  color: white;
  font-size: 1.3rem;
  background-color: $secondary;
  padding: 10px;
  height: 100vh;
  transition: all 0.5s;
}
.hiddenspan {
  display: none;
}
</style>
