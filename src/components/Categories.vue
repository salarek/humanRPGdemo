<template>
  <div class="cat">
    <div v-if="!currentCategory">
      <p class="title">Twoje Kategorie</p>
      <hr />
      <div class="achiew">
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
                <button
                  class="btn btn-primary"
                  @click="deleteCategory(cat.name)"
                >
                  usun
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div v-if="currentCategory">
      <button class="btn btn-primary" @click="currentCategory = ''">
        Powrót
      </button>
      {{ currentCategory.name }}
      <div class="achiew">
        <div
          v-for="curr in currentCategory.achievements[0]"
          :key="curr.index"
          class="achievement"
        >
          {{ curr.name }}
          <hr />
          <div>
            Dni:
            <button @click="curr.days = curr.days + 1">{{ curr.days }}</button>
          </div>
          <hr />
          Your video
          <hr />
          <button style="margin-right: 2px" class="btn btn-primary">
            Zrobione!
          </button>
          <button class="btn btn-primary" @click="curr.days = 0">Reset</button>

          <!-- <div v-for="cur in curr" :key="cur.index">
          {{ cur.name }}
        </div> -->
        </div>

        {{ currentCategory }}
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
  // computed: {
  //   currentCategoryAchievement: function () {
  //     return this.currentCategory.achievements[0];
  //   },
  // },
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
.btn-primary {
  background-color: #5628c0;
}
.btn-primary:hover {
  background-color: #704ec0;
}
.title {
  text-align: center;
}
.achievement {
  // max-height: 100px;
  contain: content;
  font-size: 1.5rem;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  margin: 12px;
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
