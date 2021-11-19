<template>
  <v-row>
    <v-col>
      <v-card class="mt-2" max-width="100%" outlined >
        <v-card-title class="ml-16 pl-6 pt-10 pb-12" style="font-weight: normal">
          Nuevo Tostado
        </v-card-title>
        <confirmation-modal :is-open="openModal" :modal-text="modalText" @confirm="confirmRegister" @cancel="cancelRegister" />
        <loading-modal :is-open="loading"></loading-modal>
        <v-card-subtitle class="pb-0 pl-16">
          <v-form ref="form" lazy-validation>
            <v-container fluid>
              <select-field
                v-model="toastType"
                field-text="Seleccione el tipo de tostado"
                :items="toastTypes"
                field-name="Tipo de tostado"
              />
              <register-field-validation
                v-model="weight"
                field-name="Peso luego del tostado"
                place-holder="Ingrese el peso obtenido"
              />
              <switch-field
                v-model="ground"
                field-name="Molido"
              />
            </v-container>
          </v-form>
        </v-card-subtitle>
        <confirm-buttons @save="handleRegister" @cancel="handleCancel"/>
        <br>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapActions, mapState} from "vuex";
import LoadingModal from "~/components/register/fields/LoadingModal";
import ConfirmationModal from "~/components/register/ConfirmationModal";
import ConfirmButtons from "~/components/register/ConfirmButtons";
import RegisterFieldValidation from "~/components/register/fields/RegisterFieldValidation";
import SelectField from "~/components/register/fields/SelectField";
import SwitchField from "~/components/register/fields/SwitchField";

export default {
  name: "Toast",
  components: {SwitchField, SelectField, LoadingModal, ConfirmationModal, ConfirmButtons, RegisterFieldValidation},
  props: {
    item: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {
      openModal: false,
      modalText: '¿Estás seguro que deseas registrar las características del tostado?',
      toastTypes: ['Tostado Claro', 'Tostado Medio', 'Tostado Oscuro', 'Tostado para Pasar', 'Tostado de Métodos'],
    }
  },
  computed: {
    ...mapState({
      loading: state => state.analysis.physical.physicalAnalysis.loading,
      toast: state => state.toast.toast.toast,
    }),
    toastType: {
      get() {
        return this.toast === null ? null : this.toast.newToast.toastType ;
      },
      set(val) {
        this.$store.commit('toast/toast/setToastType', val);
      },
    },
    ground: {
      get() {
        return this.toast === null ? false : this.toast.newToast.ground === undefined ? false : this.toast.newToast.ground;
      },
      set(val) {
        this.$store.commit('toast/toast/setGround', val);
      },
    },
    weight: {
      get() {
        return this.toast === null ? null : this.toast.newToast.weightt;
      },
      set(val) {
        this.$store.commit('toast/toast/setWeight', val);
      }
    }
  },
  methods: {
    ...mapActions({
      updateToast: 'toast/toast/updateToast',
    }),
    handleCancel() {
      this.$emit('cancel');
    },
    handleRegister() {
      this.openModal = true;
    },
    async confirmRegister() {
      await this.updateToast(this.$store.state.toast.toast);
    },
    cancelRegister() {
      this.openModal = false;
    },
  }
}
</script>

<style scoped>

</style>
