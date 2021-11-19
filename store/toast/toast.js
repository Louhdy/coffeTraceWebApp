import UtilsServices from "~/services/utils/utils-services";

export const state = () => ({
  toast: null,
  loading: false,
  snackbar: false,
  error: null,
})

export const actions = {
  async getToast ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      const toast = await service.getObjectById(params);
      await commit('storeToast', toast.data);
    } catch (error) {
      commit('catchError', error);
    }
    commit('changeLoading', false);
  },
  async updateToast ({ commit }, params){
    const service = this.$getTraceabilityService(UtilsServices);
    commit('changeLoading', true);
    try {
      await service.updateObjectById(
        {uuid: params.newToast.uuid, object: params}
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
  storeToast(_state, toast) {
    _state.toast = toast;
  },
  changeLoading(_state, loading) {
    _state.loading = loading;
  },
  setToastType(_state, toastType) {
    _state.toast.newToast.toastType = toastType.value;
  },
  setGround(_state, ground) {
    _state.toast.newToast.ground = ground.value;
  },
  setWeight(_state, weight) {
    _state.toast.newToast.weight = weight.value;
  },
  catchError(_state, error) {
    _state.error = error;
  },
}
