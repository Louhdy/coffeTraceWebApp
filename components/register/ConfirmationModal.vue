<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="400"
    >
      <v-card>
        <v-card-title class="headline">
          <v-icon size="100" :color="colorIcon">
            mdi-alert-circle
          </v-icon>
        </v-card-title>
        <v-card-text style="text-align: center">
          {{ modalText }}
        </v-card-text>
        <v-card-actions class="confirmation">
          <v-spacer />
          <v-btn
            :color="colorIcon"
            rounded
            dark
            large
            min-width="6.5rem"
            :loading="loading"
            class="mr-1"
            @click="accept"
          >
            {{ textButton }}
          </v-btn>
          <v-btn
            :color="colorIcon"
            text
            rounded
            outlined
            large
            min-width="6.5rem"
            :disabled="loading"
            @click="cancel"
          >
            Cancelar
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'ConfirmationModal',
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    modalText: {
      default: '',
      type: String,
    },
    colorIcon: {
      default: 'primary',
      type: String,
    },
    textButton: {
      default: 'Registrar',
      type: String,
    },
    loading: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      dialog: this.isOpen,
    };
  },
  watch: {
    isOpen(newValue) {
      this.dialog = newValue;
    },
  },
  methods: {
    accept() {
      this.dialog = false;
      this.$emit('confirm');
    },
    cancel() {
      this.dialog = false;
      this.$emit('cancel');
    },
  },

};
</script>

<style scoped>
.confirmation{
  justify-content: center;
  align-items: start;
  height: 5rem;
}
.headline{
  justify-content: center;
}
</style>

