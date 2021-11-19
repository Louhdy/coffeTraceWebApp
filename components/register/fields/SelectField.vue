<template>
  <v-row>
    <v-col cols="4">
      <v-subheader>{{ fieldName }}
        <h3 v-if="obligatory" class="primary--text">*</h3>
        <h3 v-else> (opcional)</h3>
      :</v-subheader>
    </v-col>
    <v-col cols="7">
      <v-select
        ref="inputVal"
        v-model="inputVal"
        class="input"
        height="2.6em"
        dense
        :items="items"
        :label="fieldText"
        outlined hide-details="auto"
        @input="
          (event) => $emit('inputChange', $refs.inputVal.validate())
        "
      >
      </v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    'value': { default: '', type: String },
    'items': { default() {
        return []
      }, type: Array },
    'fieldName': { default: '', type: String },
    'fieldText': { default: '', type: String },
    'obligatory': {default: true, type: Boolean}
  },
  data() {
    return{
      selectValue: null,
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.selectValue = val;
      },
    },
  },
};
</script>
<style >
.input{
  font-size: 0.86rem;
}
.v-label {
  font-size: 0.85rem;
}
</style>
