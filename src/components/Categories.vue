<template>
  <div class="cat">
    <p class="title">Twoje Kategorie</p>
    <div class="achiew">
      <div v-for="cat in category" :key="cat" class="categories">
        <p>{{ cat.name }}</p>
        <button class="btn btn-primary">Dodajj</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["username", "level"],
  data() {
    return {
      category: "",
      user: this.username,
    };
  },
  created() {
    axios
      .get("http://localhost:5000/mycategory", {
        headers: { user: this.user },
      })
      .then((res) => {
        console.log(res);
        this.category = res.data.name;
      });
  },
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
