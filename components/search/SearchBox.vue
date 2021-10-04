<template>
  <v-text-field
    v-model="inputVal"
    prepend-inner-icon="mdi-magnify"
    :label="searchText"
    dense
    height="2.9em"
    single-line
    outlined
    hide-details
    solo
    flat
    class="searchBox"
  />
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    'searchText': {
      default: '',
      type: String,
    },
    'value': {
      default: null,
      type: String,
    },
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

<style scoped>

</style>
