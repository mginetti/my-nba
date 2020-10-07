import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./assets/style.scss";

Vue.use(Vuex);
Vue.config.productionTip = false;
console.log(process.env);
const store = new Vuex.Store({
  state: {
    matches: [],
  },
  getters: {
    getMatches: (state) => state.matches,
  },
  mutations: {
    updateMatches: (state, item) => {
      console.log(item);
      state.matches = [...item];
    },
  },
  actions: {
    fetchMatch: ({ commit }, item = {}) => {
      axios
        .get(process.env.VUE_APP_NBA_GAMES, {
          params: {
            start_date: new Date().toLocaleDateString("en", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
            ...item,
          },
        })
        .then((response) => {
          commit("updateMatches", response.data.data);
        });
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
