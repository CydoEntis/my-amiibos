<template>
  <div class="wrapper">
    <h2>Amiibo Lineup</h2>
    <div class="sort-container">
      <div class="sort-container__inner">
        <p>Type:</p>
        <button class="sortButton primary" @click="$emit('getAll')">All</button>
        <button class="sortButton secondary" @click="$emit('getFigures')">
          Figures
        </button>
        <button class="sortButton tertiary" @click="$emit('getCards')">
          Cards
        </button>
        <button class="sortButton quaternary" @click="$emit('getYarn')">
          Yarn
        </button>
      </div>
      <div class="sort-container__inner">
        <p>Sort:</p>
        <button class="sortButton quinary" @click="$emit('sortBySeries')">
          Game Series
        </button>
        <button class="sortButton senary" @click="$emit('sortByName')">
          Name
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: [
    "sortBySeries",
    "getAll",
    "sortByName",
    "getCards",
    "getFigures",
    "getYarn",
  ],
  computed: {},
};
</script>

<style scoped>
.wrapper {
  color: #333;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5px 15px;
}

.sort-container {
  display: flex;
  padding: 5px 0;
}

.sort-container__inner {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
p {
  margin-right: 5px;
}

.primary {
  background: #009beb;
}

.secondary {
  background: #e6001e;
}

.tertiary {
  background: #f5aa00;
}

.quaternary {
  background: #e62d8c;
}

.quinary {
  background: #b3d139;
}

.senary {
  background: #3dad9e;
}

button {
  color: #fff;

  font-weight: 700;
  border: none;
  margin: 0 5px;
  padding: 10px;
  border-radius: 10px;
  transition: ease-in-out 200ms all;
}

button:hover {
  cursor: pointer;
  font-size: 20px;
  padding: 10px 20px;
  transition: 150ms ease-in-out;
}

@media (max-width: 585px) {
  .wrapper {
    margin-top: 25px;
  }
  .sort-container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>