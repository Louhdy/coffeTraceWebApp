<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="elevation-1"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'SearchTable',
  props: {
    'tableTitle': {
      type: String,
      default: '',
    },
    'headers': {
      type: Array,
      default: null,
    },
    'items': {
      default: null,
      type: Array,
    },
    'fullName': {
      default: false,
      type: Boolean,
    },
    'searchText': {
      default: 'Buscar',
      type: String,
    },
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    getColor(state) {
      if (state) { return 'green'; } else { return 'red'; }
    },
    handleClick(item) {
      this.$emit('clicked', item.uuid);
    },
  },
};
</script>
