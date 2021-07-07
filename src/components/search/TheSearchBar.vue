<template>
  <form @submit.prevent="" class="amiibo-search">
    <input type="text" placeholder="Search for an Amiibo" v-model="query" />
    <button @click="$emit('findAmiibo')">Search</button>
  </form>
</template>

<script>
export default {
  props: ["query"],
  emits: ["findAmiibo"],
};
</script>

<style scoped>
.amiibo-search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
input {
  width: 350px;
  height: 45px;
  border-radius: 16px 0 0 16px;
  border: none;
  border: 2px solid #009beb;
  padding: 0 15px;
  font-size: 1.15rem;
  outline: none;
}

button {
  border-radius: 0 16px 16px 0;
  width: 90px;
  height: 45px;
  border: 2px solid #009beb;
  border-left: none;
  padding: 0 10px;
  background: #009beb;
  color: #fff;
  font-weight: bold;
  transition: ease-in-out 200ms all;
}
button:hover {
  background: transparent;
  color: #009beb;
  cursor: pointer;
}
</style>