import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  physical: null,
  loading: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getPhysical ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const physical = await service.getObjectById(params);
      await commit('storePhysicalAnalysis', physical.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async updatePhysical ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      await service.updateObjectById(
        {uuid: params.newPhysical.uuid, object: params}
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
  storePhysicalAnalysis(_state, physical) {
    _state.physical = physical;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  setHumidity(_state, humidity) {
    _state.physical.newPhysical.analysis[humidity.index].humidity = humidity.value;
  },
  setInitialWeight(_state, initialWeight) {
    _state.physical.newPhysical.analysis[initialWeight.index].initialWeight = initialWeight.value;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}



