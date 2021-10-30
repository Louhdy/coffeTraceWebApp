<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      content-class="vdialog"
      persistent
      width="400"
    >
      <v-container>
        <v-row justify="center">
          <v-col md="4">
            <line-loader color="#1ECD96"/>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<script>
import LineLoader from "~/components/utils/LineLoader";
export default {
  name: "LoadingModal",
  components: {LineLoader},
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    }
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
}
</script>

<style>
.vdialog{
  box-shadow: none;
  justify-content: center;
}
</style>
