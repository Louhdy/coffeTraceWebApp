<template>
  <v-container>
    <page-title>
      Recepción de lotes
    </page-title>
    <v-card class="mt-16  " max-width="100%" outlined >
      <v-card-title class="ml-7 pt-8 pb-12" style="font-weight: normal">
        Nueva Recepción
      </v-card-title>
      <confirmation-modal :is-open="openModal" :modal-text="modalText" @confirm="confirmRegister" @cancel="cancelRegister" />
      <v-card-subtitle class="pb-0">
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
      <v-snackbar v-model="snackBar.show" :color="snackBar.color" text top>
        {{ snackBar.text }}
        <template #action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackBar.show = false">
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-card>
  </v-container>
</template>

<script>
import SelectField from "~/components/register/fields/SelectField";
import RegisterFieldValidation from "~/components/register/fields/RegisterFieldValidation";
import ConfirmButtons from "~/components/register/ConfirmButtons";
import ConfirmationModal from "~/components/register/ConfirmationModal";

export default {
  name: "NewReception",
  components: {ConfirmationModal, ConfirmButtons, RegisterFieldValidation, SelectField},
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
  methods: {
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
      // await this.register(this.patient);
      await this.$router.push('/recepciones');
    },

  }
}
</script>

<style scoped>

</style>
