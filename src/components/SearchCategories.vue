<template>
  <div class="search-categories">
    <p class="title">Kategorie</p>
    <div class="achiew">
      <div
        :style="
          filterCategory('kalistenika')
            ? 'border-style: solid;border-color:green'
            : ''
        "
        class="categories"
      >
        <div
          v-if="filterCategory('kalistenika')"
          style="
            position: absolute;
            padding: 10px;
            top: 0px;
            left: 0px;
            color: green;
            font-size: 10px;
          "
        >
          Dodano
        </div>
        <img
          style="width: 10rem; height: 10rem; border-radius: 50%"
          :src="require(`../assets/categoryImages/kalistenika.png`)"
          alt=""
        />
        <p class="text-center">Kalistenika</p>
        <div class="d-flex justify-content-center">
          <button
            class="btn btn-primary"
            @click="addCategory('kalistenika', username)"
          >
            Dodaj
          </button>
        </div>
      </div>
      <div
        :style="
          filterCategory('swing')
            ? 'border-style: solid;border-color:green'
            : ''
        "
        class="categories"
      >
        <div
          v-if="filterCategory('swing')"
          style="
            position: absolute;
            padding: 10px;
            top: 0px;
            left: 0px;
            color: green;
            font-size: 10px;
          "
        >
          Dodano
        </div>
        <img
          style="width: 10rem; height: 10rem; border-radius: 50%"
          :src="require(`../assets/categoryImages/swing.png`)"
          alt=""
        />
        <p class="text-center">Swing</p>
        <div class="d-flex justify-content-center">
          <button
            class="btn btn-primary"
            @click="addCategory('swing', username)"
          >
            Dodaj
          </button>
        </div>
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
      category: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5000/mycategory", {
        headers: { user: this.username },
      })
      .then((res) => {
        console.log(res);
        this.category = res.data.name;
      });
  },
  methods: {
    addCategory(name, username) {
      this.category.push({ name: name });
      axios.post("http://localhost:5000/addcategory", { name, username });
    },
    filterCategory(name) {
      for (let item of this.category) {
        if (item.name == name) {
          return item;
        }
      }
      return false;
      // let isCategory = this.category.filter((item) => {
      //   if (item.name == name) {
      //     return item;
      //   } else {
      //     return false;
      //   }
      // });
      // console.log(isCategory);
      // return isCategory;
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
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
}
.items {
  display: flex;
  flex-direction: column;
}
button:focus {
  background-color: green;
}
</style>
