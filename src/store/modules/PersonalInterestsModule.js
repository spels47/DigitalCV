import axios from "axios";

const state = {
  selectedPersonalInterest: null,
  showDialog: false
};

const mutations = {
  updateSelectedPersonalInterest(state, payload){
    state.selectedPersonalInterest = payload;
    state.showDialog = true;
  }
};

const actions = {
  setSelectedPersonalInterest({ commit }, payload) {
    commit("updateSelectedPersonalInterest", payload);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
