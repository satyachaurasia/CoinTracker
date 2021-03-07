<template>
  <div class="container">
    <div class="contentBox">
      <div class="browseContent">
        <table>
          <thead>
            <tr>
              <th>
                Currency Icon
              </th>
              <th>
                Currency Name
              </th>

              <th>
                Currency Symbol
              </th>

              <th>
                Currency Price
              </th>

              <th>
                Currency Price Change
              </th>
            </tr>
          </thead>
          <tbody v-if="coins">
            <tr v-for="(coin, index) in coins" :key="index">
              <td data-th="Icon">
                <img :src="coin.iconUrl" class="logo" />
              </td>
              <td data-th="Name">
                {{ coin.name }}
              </td>
              <td data-th="Symbol">
                {{ coin.symbol }}
              </td>
              <td data-th="Price">
                {{ coin.price }}
              </td>
              <td data-th="Change">{{ coin.change }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  //   created() {
  //     this.$store.dispatch("getCoins");
  //   },
  computed: {
    coins() {
      return this.$store.state.coins;
    }
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
}
.contentBox {
  padding: 3rem 0;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

.browseContent {
  padding: 3rem;
  color: white;
  border-radius: 0.5rem;
}
table {
  min-width: 300px;
  width: 100%;
  height: fit-content;
  overflow-y: scroll;
  border-collapse: collapse;
  border: 1px solid white;
}
td {
  border: 1px solid white;
  padding: 10px;
}
th {
  padding: 10px;
}
.logo {
  width: 73px;
  height: 73px;
  border-radius: 50%;
}

@media (max-width: 700px) {
  .browseContent {
    padding: 0;
  }
}

@media (max-width: 500px) {
  tr:first-of-type {
    display: none;
  }
  tr {
    border: 1px solid white;
  }
  td {
    display: block;
    border: none;
  }
  td:first-child {
    padding-top: 0.5em;
  }
  td:last-child {
    padding-bottom: 0.5em;
  }

  td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    display: inline-block;
    @media (min-width: 480px) {
      display: none;
    }
  }
}
</style>
