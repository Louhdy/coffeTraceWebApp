import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  distribution: null,
  loading: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getDistribution ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const distribution = await service.getObjectById(params);
      await commit('storeDistribution', distribution.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async updateDistribution ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      await service.updateObjectById(
        {uuid: params.newDistribution.uuid, object: params}
      );
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  setSnack({ commit }, params) {
    commit('setShowSnack', params)
  }
}

export const mutations = {
  setShowSnack(_state, show){
    _state.snackbar = show;
  },
  storeDistribution(_state, distribution) {
    _state.distribution = distribution;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}
