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
    getCoins({ commit }) {
      axios
        .get("https://api.coinranking.com/v1/public/coins/?limit=10")
        .then(result => commit("getCoins", result.data))
        .catch(console.error);
    }
  },
  modules: {}
});
