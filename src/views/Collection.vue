  <template>
  <div class="collection">
    <div class="call-to-action">
      <h1>Your one stop shop to your Amiibo Collection!</h1>
    </div>
    <form @submit.prevent="" class="amiibo-search">
      <input type="text" placeholder="Search for an Amiibo" v-model="query" />
    </form>
    <div class="sorting-content">
      <sort-content
        @getAll="getAll"
        @getFigures="getType('Figure')"
        @getCards="getType('Card')"
        @getYarn="getType('Yarn')"
        @sortBySeries="sortBySeries"
        @sortByName="sortByName"
      />
    </div>
    <div class="collection-showcase">
      <div v-for="amiibo in filteredCollection" :key="amiibo.id">
        <amiibo-card
          :name="amiibo.name"
          :series="amiibo.series"
          :date="amiibo.date"
          :src="amiibo.src"
          :desc="amiibo.name"
          :id="amiibo.id"
          :collected="amiibo.collected"
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
  name: "Collection",
  props: ["collection"],
  components: { AmiiboCard, TheSearchBar, SortContent },
  data() {
    return {
      query: "",
      myCollection: [],
    };
  },
  created() {
    if (localStorage.getItem("collection") === null) {
      return;
    } else {
      this.myCollection = JSON.parse(window.localStorage.getItem("collection"));
    }
    console.log(this.myCollection);
  },
  methods: {
    getType(type) {
      this.myCollection = [];
      const temp = JSON.parse(window.localStorage.getItem("collection"));
      for (const item of temp) {
        if (item.type === type) {
          this.myCollection.push(item);
        }
      }
    },
    getAll() {
      this.myCollection = JSON.parse(window.localStorage.getItem("collection"));
    },
    sortBySeries() {
      this.myCollection = this.myCollection.sort((a, b) =>
        a.series > b.series ? 1 : -1
      );
    },
    sortByName() {
      this.myCollection = this.myCollection.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    },
  },
  computed: {
    filteredCollection: function () {
      return this.myCollection.filter((amiibo) => {
        return amiibo.name.match(this.query);
      });
    },
  },
};
</script>

<style scoped>
.collection {
  width: 90%;
  margin: 0 auto;
}

.collection-showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>