import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  sensorial: null,
  loading: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getSensorial ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const sensorial = await service.getObjectById(params);
      await commit('storeSensorial', sensorial.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async updateSensorial ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      await service.updateObjectById(
        {uuid: params.newSensorial.uuid, object: params}
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
  storeSensorial(_state, sensorial) {
    _state.sensorial = sensorial;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  setScore(_state, score){
    _state.sensorial.newSensorial.analysis[score.index].score = score.value;
  },
  setObservations(_state, observations){
    _state.analysis.newSensorial.analysis[observations.index].observations = observations.value;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}
