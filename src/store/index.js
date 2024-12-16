import { createApp } from 'vue'
import { createStore } from 'vuex'
import CompetenciesModule from "@/store/modules/CompetenciesModule";
import PersonalInterestsModule from "@/store/modules/PersonalInterestsModule";

const app = createApp();

const store = createStore({
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
    CompetenciesModule: CompetenciesModule,
    PersonalInterestsModule: PersonalInterestsModule
  }
});

app.use(store);

export default store;
