<template>
  <div class="amiibos">
    <div class="call-to-action">
      <h1>
        Amiibo's come in all different shapes and sizes, from high-quality
        character figures to super-portable cards.
      </h1>
      <h2>Begin your collection today!</h2>
    </div>
    <form @submit.prevent="" class="amiibo-search">
      <input type="text" placeholder="Search for an Amiibo" v-model="query" />
    </form>
    <div class="sorting-content">
      <sort-content
        @getAll="getAll"
        @getFigures="getFigures"
        @getCards="getCards"
        @getYarn="getYarn"
        @sortBySeries="sortBySeries"
        @sortByName="sortByName"
      />
    </div>
    <div class="amiibo-showcase">
      <div v-if="loading" class="loading">
        <div class="loadingio-spinner-ball-v4xbuiqytyj">
          <div class="ldio-yabr8xchn6p"><div></div></div>
        </div>
      </div>
      <div
        v-else
        v-for="amiibo in filteredAmiibos"
        :key="amiibo.head + amiibo.tail"
      >
        <amiibo-card
          :name="amiibo.name"
          :series="amiibo.amiiboSeries"
          :date="amiibo.release.na"
          :src="amiibo.image"
          :desc="amiibo.name"
          :id="amiibo.head + amiibo.tail"
          :collected="amiibo.collected"
          @update-collection="updateCollection(amiibo)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheSearchBar from "../components/search/TheSearchBar.vue";
import AmiiboCard from "../components/amiibos/AmiiboCard.vue";
import SortContent from "../components/sorting/SortContent.vue";

export default {
  name: "Amiibos",
  components: { AmiiboCard, TheSearchBar, SortContent },
  data() {
    return {
      amiibos: [],
      collection: [],
      query: "",
      loading: true,
      tempCollection: [],
    };
  },
  // provide: {
  //   amiibos: this.amiibos,
  // },
  methods: {
    async fetchAmiibos() {
      this.loading = true;
      const res = await fetch("https://amiiboapi.com/api/amiibo/");
      const data = res.json();
      this.loading = false;
      return data;
    },
    async fetchAmiibosByType(type) {
      this.loading = true;
      const res = await fetch(`https://amiiboapi.com/api/amiibo/?type=${type}`);
      const data = res.json();
      this.loading = false;
      return data;
    },
    async getAll() {
      const temp = await this.fetchAmiibos();
      this.amiibos = temp.amiibo;

      this.loadLocalStorage();
      this.updateUI();
    },
    async getFigures() {
      const temp = await this.fetchAmiibosByType("figure");
      this.amiibos = temp.amiibo;

      this.loadLocalStorage();
      this.updateUI();
    },
    async getCards() {
      const temp = await this.fetchAmiibosByType("card");
      this.amiibos = temp.amiibo;

      this.loadLocalStorage();
      this.updateUI();
    },
    async getYarn() {
      const temp = await this.fetchAmiibosByType("yarn");
      this.amiibos = temp.amiibo;

      this.loadLocalStorage();
      this.updateUI();
    },
    sortBySeries() {
      this.amiibos = this.amiibos.sort((a, b) =>
        a.gameSeries > b.gameSeries ? 1 : -1
      );
    },
    sortByName() {
      this.amiibos = this.amiibos.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    toggleCollectedUI(amiibo) {
      amiibo.collected = !amiibo.collected;
    },
    updateCollection(amiibo) {
      this.toggleCollectedUI(amiibo);

      // Create a newAmiibo
      const newAmiibo = {
        id: amiibo.head + amiibo.tail,
        name: amiibo.name,
        src: amiibo.image,
        series: amiibo.amiiboSeries,
        date: amiibo.release.na,
        collected: amiibo.collected,
        type: amiibo.type,
      };

      // Load whats already in local storage
      this.loadLocalStorage();

      // Check if the item exists in our collection if it does remove it, otherwise add it.
      this.updateStorage(amiibo, newAmiibo);
    },
    updateStorage(amiibo, newAmiibo) {
      if (
        this.collection.findIndex((item) => item.id === newAmiibo.id) !== -1
      ) {
        console.log("exists");
        const index = this.collection.findIndex(
          (item) => item.id === amiibo.head + amiibo.tail
        );

        this.collection.splice(index, 1);

        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.collection)
        );
      } else {
        console.log("doesnt exist");

        this.collection.push(newAmiibo);

        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.collection)
        );
      }
    },
    loadLocalStorage() {
      if (localStorage.getItem("collection") === null) {
        window.localStorage.setItem(
          "collection",
          JSON.stringify(this.collection)
        );
      } else {
        this.collection = JSON.parse(window.localStorage.getItem("collection"));
      }
    },
    updateUI() {
      if (this.collection.length !== null) {
        for (const item of this.collection) {
          for (const amiibo of this.amiibos) {
            if (item.id === amiibo.head + amiibo.tail) {
              amiibo.collected = true;
            }
          }
        }
      }
    },
  },
  computed: {
    filteredAmiibos: function () {
      return this.amiibos.filter((amiibo) => {
        return amiibo.name.match(this.query);
      });
    },
  },
  async created() {
    this.loadLocalStorage();

    const temp = await this.fetchAmiibos();
    this.amiibos = temp.amiibo;

    this.updateUI();
  },
};
</script>

<style>
.amiibos {
  width: 90%;
  margin: 0 auto;
}

.call-to-action {
  width: 80%;
  margin: 25px auto;
}

.call-to-action h1 {
  font-size: 40px;
}

.call-to-action h2 {
  font-size: 32px;
  letter-spacing: 7px;
}

.call-to-action h1,
.call-to-action h2 {
  font-weight: 300;
  padding-bottom: 15px;
}

.amiibo-search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
input {
  width: 350px;
  height: 45px;
  border-radius: 16px;
  border: none;
  padding: 0 15px;
  font-size: 1.15rem;
  outline: none;
  border: 2px solid #e6001e;
}

.amiibo-showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.loading {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes ldio-yabr8xchn6p {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 108px);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
  100% {
    transform: translate(0, 0);
  }
}

.ldio-yabr8xchn6p div {
  position: absolute;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #009beb;
  left: 74px;
  top: 20px;
  animation: ldio-yabr8xchn6p 1s linear infinite;
}
.loadingio-spinner-ball-v4xbuiqytyj {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-yabr8xchn6p {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-yabr8xchn6p div {
  box-sizing: content-box;
}

@media (max-width: 585px) {
  .amiibos {
    width: 100%;
  }

  .call-to-action h1 {
    font-size: 30px;
  }

  .call-to-action h2 {
    font-size: 22px;
  }
}

@media (max-width: 585px) {
  .amiibos {
    width: 100%;
  }

  .call-to-action h1 {
    font-size: 25px;
    text-align: left;
  }

  .call-to-action h2 {
    font-size: 18px;
    text-align: left;
  }
}

@media (max-width: 585px) {
  input {
    width: 300px;
  }
}
</style>
