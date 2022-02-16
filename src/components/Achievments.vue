<template>
  <div class="achiewements">
    <div class="checkerboard"></div>
    <p class="title">Twój profil</p>
    <hr />

    <div class="achiew">
      <div class="profile">
        <img
          style="width: 100px; height: 100px; border-radius: 10px"
          :src="getImgUrl(avatar)"
          alt=""
        />
        <div>{{ username }}</div>
        <div>Level: {{ level }}</div>
      </div>

      <div class="items">
        <img
          style="width: 25rem; height: 15rem"
          src="@/assets/desk.png"
          alt=""
        />
        <p style="color: yellow" class="title">Gablotka pucharów</p>
      </div>
    </div>
    <div class="categories">
      <p>Kategorie</p>
      1
      <img
        style="margin-bottom: 6px; width: 25px; height: 25px"
        src="@/assets/star.png"
        alt=""
      />
      kalistenika
    </div>
  </div>
</template>
<script>
export default {
  props: ["username", "level", "avatar"],
  data() {
    return {};
  },
  // computed: {
  //   avatarImg: function () {
  //     let name = this.avatar[0];
  //     console.log(name);
  //     let newName = name.substring(29, name.length);
  //     return newName;
  //   },
  // },
  methods: {
    getImgUrl(pet) {
      var images = require.context("/public/", false, /\.jpg$/);
      return images("./" + pet);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables";
$columns: 7;
$rows: 7;
$cells: $columns * $rows;

@for $i from 1 through $cells {
  .checkerboard > div:nth-child(#{$i}) {
    animation-delay: (random($cells) / $columns) + s;
  }
}

.checkerboard {
  position: fixed;
  background-image: url("https://assets.codepen.io/9632/walkrus-gradient.jpg");
  opacity: 0.2;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 100vh;
  width: 100%;
}

.achiewements {
  position: absolute;
  left: 0%;
  width: 100%;
}
.title {
  text-align: center;
}
.achiew {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.profile {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
  z-index: 200;
}
.categories {
  position: absolute;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
  z-index: 200;
}
.items {
  display: flex;
  flex-direction: column;
  z-index: 200;
}
</style>
