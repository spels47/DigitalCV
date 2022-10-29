import axios from "axios";

const state = {
  exampleData: {}
};

const mutations = {
  updateExampleData(state, payload){
    state.exampleData = payload;
  }
};

const actions = {
  setExampleData({ commit }, payload) {
    commit("updateExampleData", payload);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
