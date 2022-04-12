<template>
  <div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
html,
body {
  // height: 100%;
  // width: 100%;
  overscroll-behavior: contain;
  background: #f2f2f2;
}

#app {
  overscroll-behavior: contain;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
