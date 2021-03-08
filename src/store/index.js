import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    coins: [],
    stats: null
  },
  mutations: {
    getCoins(state, respData) {
      const { data } = respData;
      const { coins, stats } = data;
      state.coins = coins;
      state.stats = stats;
    }
  },
  actions: {
    getCoins({ commit }, { pageNumber = 0, perPageRow = 10 }) {
      const offset = perPageRow * pageNumber;
      axios
        .get(`https://api.coinranking.com/v1/public/coins/?limit=${perPageRow}&offset=${offset}`)
        .then(result => commit("getCoins", result.data))
        .catch(console.error);
    }
  },
  modules: {}
});
