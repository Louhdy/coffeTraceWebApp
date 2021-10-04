<template>
  <v-row>
    <v-col cols="4">
      <v-subheader>{{ fieldName }}
        <h3 v-if="obligatory" class="primary--text">*</h3>
        <h3 v-else> (opcional)</h3>
        :</v-subheader>
    </v-col>
    <v-col cols="7">
      <v-text-field
        ref="inputVal"
        v-model="inputVal"
        :label="placeHolder"
        single-line
        outlined
        dense
        height="2.6em"
        :disabled="disabled"
        hide-details="auto"
        :rules="validation"
        @input="
          (event) => $emit('inputChange', $refs.inputVal.validate())
        "
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RegisterFieldValidation',
  props: {
    'value': { default: '', type: String },
    'fieldName': { default: '', type: String },
    'validation': { default() {
        return []
      }, type: Array },
    'placeHolder': { default: '', type: String},
    'disabled': { default: false, type: Boolean},
    'obligatory': {default: true, type: Boolean}
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
