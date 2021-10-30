import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  packing: null,
  loading: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getPacking ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const packing = await service.getObjectById(params);
      await commit('storePacking', packing.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async updatePacking ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      await service.updateObjectById(
        {uuid: params.newPacking.uuid, object: params}
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
  storePacking(_state, packing) {
    _state.packing = packing;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  setPackageType(_state, packageType) {
    _state.packing.newPacking.packageType = packageType;
  },
  setPresentation(_state, presentation) {
    _state.packing.newPacking.presentation = presentation;
  },
  setAmount(_state, amount){
    _state.packing.newPacking.amount = amount;
  },
  setRecommendations(_state, recommendations) {
    _state.packing.newPacking.recommendations = recommendations;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}
