<template>
  <div class="container">
    <div class="contentBox">
      <div class="browseContent">
        <h2>Coin Tracker</h2>
        <Pagination
          :pageNumber="pageNumber"
          :perPageRow="perPageRow"
          @change-page-number="changePageNumber"
          @change-per-page="chanagePerPage"
        />
        <table>
          <thead>
            <tr class="firstRow">
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
          <tbody v-if="coins.length > 0">
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
              <td data-th="Price">&#36; {{ coin.price }}</td>
              <td data-th="Change">{{ coin.change }}%</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td data-th="Icon">
                Loading...
              </td>
              <td data-th="Name">
                Loading...
              </td>
              <td data-th="Symbol">
                Loading...
              </td>
              <td data-th="Price">
                Loading...
              </td>
              <td data-th="Change">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  name: "Home",
  created() {
    this.interval = setInterval(
      () =>
        this.$store.dispatch("getCoins", {
          pageNumber: this.pageNumber,
          perPageRow: this.perPageRow
        }),
      5000
    );
  },
  beforeUnmount() {
    clearInterval();
  },
  data() {
    return {
      pageNumber: Number(this.$route.query.pageNumber) - 1 || 0,
      perPageRow: Number(this.$route.query.perPageRow) || 10
    };
  },
  components: {
    Pagination
  },
  computed: {
    coins() {
      return this.$store.state.coins;
    }
  },
  methods: {
    changePageNumber(clickedPageNumber) {
      this.pageNumber = clickedPageNumber;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          pageNumber: clickedPageNumber + 1
        }
      });
    },
    chanagePerPage(clickedPerPageRow) {
      this.perPageRow = clickedPerPageRow;
      this.pageNumber = 0;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          pageNumber: 1,
          perPageRow: clickedPerPageRow
        }
      });
    }
  },
  watch: {
    pageNumber: function(val, oldVal) {
      this.$store.dispatch("getCoins", { pageNumber: val, perPageRow: this.perPageRow });
    },
    perPageRow: function(val, oldVal) {
      this.$store.dispatch("getCoins", { pageNumber: this.pageNumber, perPageRow: val });
    }
  },
  emits: ["change-page-number", "change-per-page"]
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .firstRow {
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
    @media (min-width: 500px) {
      display: none;
    }
  }
}
</style>
