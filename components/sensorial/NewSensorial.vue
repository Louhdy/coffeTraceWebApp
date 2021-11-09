<template>
  <v-card
    class="ma-4"
    width="885"
    elevation="0"
  >
    <v-card-title class="ml-14 pl-11 pt-2" style="font-weight: 400; font-family: 'Montserrat', sans-serif; font-size: 1.45rem">
      Análisis Sensorial - Muestra {{ item }}
    </v-card-title>
    <confirmation-modal :is-open="openModal" :modal-text="modalText" @confirm="confirmRegister" @cancel="cancelRegister"/>
    <loading-modal :is-open="loading"/>
    <v-card-subtitle class="ml-14 pt-0">
      <p class="pl-7 pt-1" style="font-weight: 300; font-family: 'Montserrat', sans-serif">Análisis de la muestra obtenida del saco {{ item }}</p>
      <v-form ref="form" class="mt-6" lazy-validation>
        <v-container fluid>
          <register-field-validation
            v-model="score"
            field-name="Puntaje en taza"
            place-holder="Ingrese el puntaje obtenido"
          />
          <register-field-validation
            v-model="observation"
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
import ConfirmationModal from "~/components/register/ConfirmationModal";
import LoadingModal from "~/components/register/fields/LoadingModal";
import RegisterFieldValidation from "~/components/register/fields/RegisterFieldValidation";
import ConfirmButtons from "~/components/register/ConfirmButtons";
export default {
  name: "NewSensorial",
  components: {ConfirmButtons, RegisterFieldValidation, LoadingModal, ConfirmationModal},
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
      modalText: '¿Estás seguro que deseas registrar las características de los análisis sensoriales?',
    }
  },
  computed: {
    ...mapState({
      loading: state => state.analysis.sensorial.sensorialAnalysis.analysis,
    }),
    score: {
      get() {
        return this.analysis === null ? null : this.analysis.score;
      },
      set(val) {
        this.$store.commit('analysis/sensorial/sensorialAnalysis/setScore', { index: this.item -1, value: val});
      },
    },
    observation: {
      get() {
        return this.analysis === null ? null : this.analysis.observation;
      },
      set(val) {
        this.$store.commit('analysis/physical/physicalAnalysis/setInitialWeight', { index: this.item -1, value: val});
      }
    }
  },
  methods: {
    ...mapActions({
      updateAnalysis: 'analysis/sensorial/sensorialAnalysis/updateSensorial',
    }),
    handleCancel() {
      this.$emit('cancel');
    },
    handleRegister() {
      this.openModal = true;
    },
    async confirmRegister() {
      await this.updateAnalysis(this.$store.state.analysis.sensorial.sensorialAnalysis.sensorial);
    },
    cancelRegister() {
      this.openModal = false;
    },
  }
}
</script>

<style scoped>

</style>
