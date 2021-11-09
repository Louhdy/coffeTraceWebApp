<template>
  <v-card
    class="ma-4"
    width="885"
    elevation="0"
  >
    <v-card-title class="ml-14 pl-11 pt-2" style="font-weight: 400; font-family: 'Montserrat', sans-serif; font-size: 1.45rem">
      Análisis físico - Muestra {{ item }}
    </v-card-title>
    <confirmation-modal :is-open="openModal" :modal-text="modalText" @confirm="confirmRegister" @cancel="cancelRegister"/>
    <loading-modal :is-open="loading"/>
    <v-card-subtitle class="ml-14 pt-0">
      <p class="pl-7 pt-1" style="font-weight: 300; font-family: 'Montserrat', sans-serif">Análisis de la muestra obtenida del saco {{ item }}</p>
      <v-form ref="form" class="mt-6" lazy-validation>
        <v-container fluid>
          <register-field-validation
            v-model="initialWeight"
            field-name="Peso inicial"
            place-holder="Ingrese el peso de la muestra"
          />
          <register-field-validation
            v-model="humidity"
            field-name="Humedad"
            place-holder="Ingrese el valor de la humedad"
          />
        </v-container>
      </v-form>
    </v-card-subtitle>
    <confirm-buttons @save="handleRegister" @cancel="handleCancel"/>
  </v-card>
</template>

<script>
import {mapActions, mapState} from "vuex";
import RegisterFieldValidation from "~/components/register/fields/RegisterFieldValidation";
import ConfirmButtons from "~/components/register/ConfirmButtons";
import ConfirmationModal from "~/components/register/ConfirmationModal";
import LoadingModal from "~/components/register/fields/LoadingModal";
export default {
  name: "NewAnalisis",
  components: {LoadingModal, ConfirmationModal, ConfirmButtons, RegisterFieldValidation},
  props: {
    item: {
      default: 0,
      type: Number,
    },
    analysis: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      openModal: false,
      modalText: '¿Estás seguro que deseas registrar las características de los análisis físicos?',
    }
  },
  computed: {
    ...mapState({
      loading: state => state.analysis.physical.physicalAnalysis.loading,
    }),
    humidity: {
      get() {
        return this.analysis === null ? null : this.analysis.humidity ;
      },
      set(val) {
        this.$store.commit('analysis/physical/physicalAnalysis/setHumidity', { index: this.item - 1, value: val});
      },
    },
    initialWeight: {
      get() {
        return this.analysis === null ? null : this.analysis.initialWeight;
      },
      set(val) {
        this.$store.commit('analysis/physical/physicalAnalysis/setInitialWeight', { index: this.item -1, value: val});
      }
    }
  },
  methods: {
    ...mapActions({
      updateAnalysis: 'analysis/physical/physicalAnalysis/updatePhysical',
    }),
    handleCancel() {
      this.$emit('cancel');
    },
    handleRegister() {
      this.openModal = true;
    },
    async confirmRegister() {
      await this.updateAnalysis(this.$store.state.analysis.physical.physicalAnalysis.physical);
    },
    cancelRegister() {
      this.openModal = false;
    },
  }
}
</script>

<style scoped>

</style>
