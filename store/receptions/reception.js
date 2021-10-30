import ReceptionServices from "~/services/receptions/reception-services";
import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  receptions: [],
  reception: null,
  loading: false,
  submitted: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getAllReceptions ({ commit }) {
    const service = this.$getTraceabilityService(ReceptionServices);
    commit('changeLoading', true);
    try {
      const receptions = await service.getAllReceptions();
      commit('storeReceptions', receptions.data);

    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async getReception ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const reception = await service.getObjectById(params);
      commit('storeReception', reception.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', true);

  },
  async registerReception ({ commit }, params) {
    const service = this.$getTraceabilityService(ReceptionServices);
    commit('changeSubmitted', true);
    try {
      await service.registerReception(params);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeSubmitted', false);
    commit('setShowSnack', true);
  },
  setSnack({ commit }, params) {
    commit('setShowSnack', params)
  }
}

export const getters = {
  snackbar: _state => _state.snackbar,
  reception: _state => _state.reception,
};

export const mutations = {
  setShowSnack(_state, show){
    _state.snackbar = show;
  },
  storeReceptions(_state, receptions) {
    _state.receptions = receptions;
  },
  storeReception(_state, reception) {
    _state.reception = reception;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  changeSubmitted(_state, submit) {
    _state.submitted = submit;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}
