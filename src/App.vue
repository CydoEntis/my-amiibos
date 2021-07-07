<template>
  <the-navigation></the-navigation>
  <router-view />
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background: url("https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/common/sil-blend.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
}

a.btn-primary {
  background: #e6001e;
}

a.btn-secondary {
  background: #009beb;
}

a.btn-tertiary {
  background: #f5aa00;
}

#app a:hover {
  font-size: 20px;
  padding: 10px 20px;
  transition: 150ms ease-in-out;
}

#app a.router-link-exact-active {
  font-size: 20px;
  padding: 10px 20px;
}
</style>
