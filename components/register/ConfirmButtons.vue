<template>
  <v-card-actions class="d-flex justify-end mr-10 mt-4">
    <v-btn
      depressed
      color="primary"
      rounded
      large
      min-width="6.5rem"
      @click="save"
    >
      GUARDAR
    </v-btn>
    <v-btn
      class="ml-5"
      depressed
      color="primary"
      rounded
      large
      min-width="6.5rem"
      outlined
      @click="cancel"
    >
      CANCELAR
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  name: 'ConfirmButtons',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    save() {
      this.$emit('save');
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>

