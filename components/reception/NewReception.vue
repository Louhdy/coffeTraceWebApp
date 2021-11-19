<template>
  <v-container>
    <page-title>
      Recepción de lotes
    </page-title>
    <v-card class="mt-16  " max-width="100%" outlined >
      <v-card-title class="ml-16 pl-6 pt-10 pb-12" style="font-weight: normal">
        Nueva Recepción
      </v-card-title>
      <confirmation-modal :is-open="openModal" :modal-text="modalText" @confirm="confirmRegister" @cancel="cancelRegister" />
      <loading-modal :is-open="loading"></loading-modal>
      <v-card-subtitle class="pb-0 pl-16">
        <v-form ref="form" lazy-validation>
          <v-container fluid>
            <select-field v-model="reception.producer" field-text="Seleccione un productor" :items="producers" field-name="Productor"/>
            <select-field v-model="reception.seed" field-text="Seleccione el tipo de semilla" :items="typeSeed" field-name="Tipo de semilla"/>
            <register-field-validation
              v-model="reception.amountBags"
              field-name="Cantidad de sacos"
              place-holder="Ingrese la cantidad de sacos"
            />
          </v-container>
        </v-form>
      </v-card-subtitle>
      <confirm-buttons @save="handleRegister" @cancel="handleCancel"/>
      <br>
    </v-card>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import SelectField from "~/components/register/fields/SelectField";
import RegisterFieldValidation from "~/components/register/fields/RegisterFieldValidation";
import ConfirmButtons from "~/components/register/ConfirmButtons";
import ConfirmationModal from "~/components/register/ConfirmationModal";
import LoadingModal from "~/components/register/fields/LoadingModal";

export default {
  name: "NewReception",
  components: { LoadingModal, ConfirmationModal, ConfirmButtons, RegisterFieldValidation, SelectField},
  data: () => ({
    producers: ['Finca Gran Reserva', 'Finca Luna Llena','Finca el Cerro'],
    typeSeed: ['Arábica', 'Robusta'],
    isValidForm: false,
    openModal: false,
    modalText: '¿Estás seguro que deseas registrar esta nueva recepción?',
    snackBar: {
      show: false,
      color: '',
      text: '',
    },
    reception: {
      producer: null,
      seed: null,
      amountBags: null,
    },
  }),
  computed: {
    ...mapState({
      loading: state => state.receptions.reception.submitted,
    }),
  },
  methods: {
    ...mapActions({
      registerReception: 'receptions/reception/registerReception',
    }),
    handleRegister() {
      if (this.$refs.form.validate()) {
        this.openModal = true;
      }
    },

    cancelRegister() {
      this.openModal = false;
    },

    handleCancel() {
      this.clearForm();
      this.$router.push('/recepciones');
    },

    clearForm() {
      this.reception.producer = null;
      this.reception.seed = null;
      this.reception.amountBags = null;
    },

    async confirmRegister() {
      await this.registerReception(this.reception);
      await this.$router.push('/recepciones');
    },
  }
}
</script>

<style scoped>

</style>
