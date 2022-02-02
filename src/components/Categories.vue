<template>
  <div class="categories">
    <p class="title">Twoje osiągnięcia</p>
    <div class="achiew">
      <div class="profile">
        <img
          style="width: 100px; height: 100px"
          src="@/assets/avatar.jpg"
          alt=""
        />
        <div>{{ username }}</div>
        <div>Level: {{ level }}</div>
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
      <div class="items">
        <img
          style="width: 25rem; height: 15rem"
          src="@/assets/desk.png"
          alt=""
        />
        <p style="color: yellow" class="title">Gablotka pucharów</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["username", "level"],
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
}
.achiew {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.profile {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
}
.categories {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
}
.items {
  display: flex;
  flex-direction: column;
}
</style>
