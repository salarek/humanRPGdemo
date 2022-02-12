<template>
  <div class="cat">
    <p class="title">Twoje Kategorie</p>
    <div v-if="!currentCategory" class="achiew">
      <div v-for="cat in category" :key="cat.index" class="categories">
        <img
          style="width: 10rem; height: 10rem; border-radius: 50%"
          :src="require(`../assets/categoryImages/${cat.name}.png`)"
          alt=""
        />
        <p class="text-center">{{ cat.name }}</p>
        <table style="width: 100%">
          <tr>
            <td>
              <button class="btn btn-primary" @click="chooseCategory(cat)">
                podgląd
              </button>
            </td>
            <td>
              <button class="btn btn-primary" @click="deleteCategory(cat.name)">
                usun
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div v-if="currentCategory" class="achiew">
      <button class="btn btn-primary" @click="currentCategory = ''">
        Powrót
      </button>
      {{ currentCategory }}
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["username", "level"],
  data() {
    return {
      currentCategory: "",
      category: [],
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
  methods: {
    chooseCategory(name) {
      this.currentCategory = name;
    },
    deleteCategory(name) {
      console.log(this.category);
      this.category = this.category.filter((x) => {
        if (x.name != name) return x;
      });

      console.log(this.category);
      axios
        .delete("http://localhost:5000/mycategory", {
          headers: { name: name, user: this.username },
        })
        .then((res) => {
          console.log(res);
        });
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
