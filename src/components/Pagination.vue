<template>
  <div>
    <div class="pagination-row">
      <span>Rows per Page</span>

      <span v-for="perPageOption in [10, 25, 50, 100]" :key="perPageOption">
        <button
          :class="['per-page-button', perPageRow == perPageOption ? 'active' : '']"
          @click="onPerPageClick(perPageOption)"
        >
          {{ perPageOption }}
        </button>
      </span>
    </div>
    <div class="pagination-row">
      <span>Page Number</span>
      <span v-for="(item, index) in new Array(pageRange)" :key="index">
        <button
          @click="onPageClick(index)"
          :class="['pagination-button', pageNumber == index ? 'active' : '']"
        >
          {{ index + 1 }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageNumber: Number,
    perPageRow: Number
  },
  methods: {
    onPageClick(clickedPageNumber) {
      this.$emit("change-page-number", clickedPageNumber);
    },
    onPerPageClick(clickedPerPageRow) {
      this.$emit("change-per-page", clickedPerPageRow);
    }
  },
  computed: {
    pageRange() {
      return 100 / this.perPageRow;
    }
  }
};
</script>

<style scoped>
.pagination-row {
  display: flex;
  justify-content: center;
  padding: 5px 0;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  align-items: center;
}
.pagination-button,
.per-page-button {
  padding: 8px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
.active {
  background-color: #ccc;
  cursor: auto;
}
</style>
