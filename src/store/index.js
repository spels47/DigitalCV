import Vue from 'vue'
import Vuex from 'vuex'
import ExampleModule from "@/store/modules/ExampleModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuetifyDarkMode: false,
  },
  getters: {
    darkMode: state => state.vuetifyDarkMode
  },
  mutations: {
    updateVuetifyDarkMode(state, payload) {
      window.localStorage.setItem("darkmode", payload);
      state.vuetifyDarkMode = payload;
    },
  },
  actions: {
    updateDarkMode({ commit }, payload) {
      commit("updateVuetifyDarkMode", payload);
    }
  },
  modules: {
    ExampleModule: ExampleModule
  }
})
