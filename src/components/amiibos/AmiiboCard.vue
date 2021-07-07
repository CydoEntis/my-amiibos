<template>
  <base-card>
    <div class="amiibo-container" @click="markCollected">
      <div class="amiibo-img__wrapper">
        <img :src="src" :alt="desc" />
      </div>
      <div class="amiibo-info">
        <h3 class="amiibo-name">{{ name }}</h3>
        <p class="amiibo-series">{{ series }}</p>
        <p class="amiibo-date">Available: {{ date }}</p>
      </div>
      <div class="collected">
        <h3
          :class="[
            collected ? 'collected' : 'not-collected',
            'toggle-collection',
          ]"
        >
          {{ collected ? "Collected" : "Not Collected" }}
        </h3>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ["update-collection"],
  props: ["src", "desc", "name", "series", "date", "id", "collected"],
  data() {
    return {
      isCollected: false,
    };
  },
  methods: {
    markCollected() {
      this.isCollected = !this.isCollected;
      this.$emit("update-collection");
    },
  },
};
</script>

<style scoped>
.amiibo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: white;
  border-radius: 15px;
  margin: 50px 0;
  min-height: 350px;
  min-width: 150px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.amiibo-container:hover {
  cursor: pointer;
  color: #009beb;
}

.amiibo-container:hover img {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}

.amiibo-img__wrapper {
  width: 100%;
  height: 200px;
  padding: 10px;
  overflow: hidden;
}

img {
  max-width: 95%;
  max-height: 95%;
  display: block;
  margin: 0 auto;
}

.amiibo-info {
  height: 30%;
  /* padding-bottom: 10px; */
  /* border: 2px solid red; */
}
.amiibo-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding: 2px;
}
.amiibo-series {
  font-size: 14px;
}
.amiibo-date {
  font-size: 14px;
}

.toggle-collection {
  padding: 5px;
  border-radius: 0 0 15px 15px;
  color: #fff;
  font-weight: bold;
}

.collected {
  background: #009beb;
  border-radius: 0 0 15px 15px;
}

.not-collected {
  background: #e6001e;
  border-radius: 0 0 15px 15px;
}
</style>
