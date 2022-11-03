import axios from "axios";

const state = {
  selectedPersonalInterest: null,
  showDialog: false,
  hobbySelected: null,
};

const mutations = {
  updateSelectedPersonalInterest(state, payload){
    state.selectedPersonalInterest = payload;
    state.showDialog = payload ? true : false;
  },
  updateHobbySelected(state, payload){
    state.hobbySelected = payload;
  },
};

const actions = {
  setSelectedPersonalInterest({ commit }, payload) {
    commit("updateSelectedPersonalInterest", payload);
  },
  setListSelection({ commit }, payload) {
    commit("updateHobbySelected", payload);
  },
  resetListSelection({ commit }) {
    commit("updateHobbySelected", null);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
