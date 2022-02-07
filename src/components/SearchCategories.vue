<template>
  <div class="search-categories">
    <p class="title">Kategorie</p>
    <div class="achiew">
      <div class="categories">
        <p>Kalistenika</p>
        <button
          class="btn btn-primary"
          @click="addCategory('kalistenika', username)"
        >
          Dodaj
        </button>
      </div>
      <div class="categories">
        <p>Swing</p>
        <button class="btn btn-primary" @click="addCategory('swing', username)">
          Dodaj
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["username", "level"],
  methods: {
    addCategory(name, username) {
      axios.post("http://localhost:5000/addcategory", { name, username });
    },
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
