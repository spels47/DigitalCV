import axios from "axios";

const state = {
  selectedCompetency: null,
  showDialog: false,
  codeLanguageSelected: null,
  technologySelected: null,
  frameworkSelected: null,
  markupSelected: null,
  methodologySelected: null,
  packageManagerSelected: null
};

const mutations = {
  updateSelectedCompetency(state, payload){
    state.selectedCompetency = payload;
    state.showDialog = payload ? true : false;
  },
  updateCodeLanguageSelected(state, payload){
    state.codeLanguageSelected = payload;
  },
  updateTechnologySelected(state, payload){
    state.technologySelected = payload;
  },
  frameworkSelected(state, payload){
    state.frameworkSelected = payload;
  },
  markupSelected(state, payload){
    state.markupSelected = payload;
  },
  methodologySelected(state, payload){
    state.methodologySelected = payload;
  },
  packageManagerSelected(state, payload){
    state.packageManagerSelected = payload;
  }
};

const actions = {
  setSelectedCompetency({ commit }, payload) {
    commit("updateSelectedCompetency", payload);
  },
  setListSelection({ commit }, payload) {
    if(payload.type == "codeLanguage") commit("updateCodeLanguageSelected", payload.value);
    else if(payload.type == "technology") commit("updateTechnologySelected", payload.value);
    else if(payload.type == "framework") commit("frameworkSelected", payload.value);
    else if(payload.type == "markup") commit("markupSelected", payload.value);
    else if(payload.type == "methodology") commit("methodologySelected", payload.value);
    else if(payload.type == "packageManager") commit("packageManagerSelected", payload.value);
  },
  resetListSelection({ commit }, payload) {
    commit("updateCodeLanguageSelected", null);
    commit("updateTechnologySelected", null);
    commit("frameworkSelected", null);
    commit("markupSelected", null);
    commit("methodologySelected", null);
    commit("packageManagerSelected", null);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
