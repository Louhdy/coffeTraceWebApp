<template>
  <v-row>
    <v-col cols="4">
      <v-subheader>{{ fieldName }}
        <h3 v-if="obligatory" class="primary--text">*</h3>
        <h3 v-else> (opcional)</h3>
        :</v-subheader>
    </v-col>
    <v-col cols="7">
      <v-switch v-model="inputVal" inset/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SwitchField",
  props: {
    'value': { default: false, type: Boolean },
    'fieldName': { default: '', type: String },
    'fieldText': { default: '', type: String },
    'obligatory': {default: true, type: Boolean}
  },
  data() {
    return {
      switch: false,
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.switch = val;
      },
    },
  },
}
</script>

<style scoped>

</style>
