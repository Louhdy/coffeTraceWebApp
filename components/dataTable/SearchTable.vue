<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="elevation-1"
      :loading="loading"
      loading-text="Cargando registros"
      @click:row="rowClick"
    >
      <template #[`item.Record.newReception.id`]="{ item }">
        <span>{{ item.Record.newReception.id.toString().padStart(4, '0') }}</span>
      </template>
      <template #[`item.detail`]>
        <a>Ver más</a>
      </template>
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
    'loading': {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    rowClick(item) {
      this.$emit('selectRow', item);
    },
  },
};
</script>
