<template>
  <div class="home">
    <the-header>
      <template #cta>
        <h1>The Ultimate Amiibo Tracker</h1>
        <h2>Finally keep track of all the Amiibo's you collect</h2>
        <!-- <button>Start Collecting!</button> -->
        <router-link class="btn-secondary" to="/amiibos">
          Start Collecting
        </router-link>
      </template>
    </the-header>
    <the-image-scroll />
  </div>
</template>

<script>
import TheHeader from "../components/headers/TheHeader.vue";
import TheImageScroll from "../components/sliders/TheImageScroll.vue";

export default {
  name: "Home",
  components: { TheImageScroll, TheHeader },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: 300;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 30px;
}
a {
  text-decoration: none;
  color: #fff;
  background: #009beb;
  outline: none;
  border: #009beb 2px solid;
  font-size: 20px;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 25px;
  display: inline-block;
}

a:hover {
  background: transparent;
  border: #009beb 2px solid;
  color: #009beb;
  transition: 150ms ease-in-out;
  cursor: pointer;
}

@media screen and (max-width: 590px) {
  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 22px;
  }

  a {
    font-size: 18px;
    padding: 5px 10px;
  }
}
</style>
