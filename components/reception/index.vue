<template>
  <v-container>
    <page-title>
      Recepción de lotes
    </page-title>
    <v-row class="mt-12 mb-5">
      <v-col >
        <search-box search-text="Ingrese el N° de lote" :search="search" />
      </v-col>
      <v-spacer/>
      <v-col md="auto" >
        <option-button class="mt-2" button-name="Agregar" icon="mdi-plus-thick" @clicked="handleOptionClick" />
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="12" md="12" >
        <p class="headerTable mb-2">Seleccione el lote al que agregar el análisis físico</p>
        <search-table
          table-title="Recepciones"
          :loading="loading"
          :full-name="true"
          :headers="headers"
          :items="quotations"
          :search="search"
          search-text="Busca por nombre o DNI del paciente"
          @selectRow="rowSelected"
        />
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      absolute
      top
      text
      color="teal"
    >
      <v-icon color="primary" class="mr-2">mdi-check-circle</v-icon>
      {{ snackText }}
      <template #action="{ attrs }">
        <v-btn
          color="teal"
          icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon small>mdi-window-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PageTitle from "~/components/PageTitle";
import SearchBox from "~/components/search/SearchBox";
import OptionButton from "~/components/dataTable/OptionButton";
import SearchTable from "~/components/dataTable/SearchTable";

export default {
  name: "Recepción",
  components: { SearchTable, OptionButton, SearchBox, PageTitle },
  layout: 'default',
  data() {
    return {
      search: '',
      timeout: 5000,
      snackText: 'Nueva recepción registrada exitosamente',
      headers: [
        { text: 'N° de lote', align: 'start', value: 'Record.newReception.id', filterable: true },
        { text: 'Productor', value: 'Record.newReception.producer' },
        { text: 'Tipo de semilla', value: 'Record.newReception.seedType', width: '18%'},
        { text: 'Fecha de registro', value: 'Record.newReception.creationDate', width: '25%' },
        { text: 'Detalle', value: 'detail' },
      ],
    };
  },
  computed: {
    ...mapState({
      quotations: state => state.receptions.reception.receptions,
      loading: state => state.receptions.reception.loading,
    }),
    snackbar:{
      get() {
        return this.$store.state.receptions.reception.snackbar;
      },
      set(value) {
        this.$store.commit('receptions/reception/setShowSnack', value);
      }
    },
  },
  async mounted () {
    await this.getAllReceptions();
  },
  methods: {
    ...mapActions({
      getReceptions: 'receptions/reception/getAllReceptions',
      setShowSnack: 'receptions/reception/setSnack',
    }),
    handleOptionClick() {
      this.$router.push('/recepciones/nueva-recepcion')
    },
    getAllReceptions() {
      this.getReceptions();
    },
    rowSelected(item) {
      this.$router.push(`/recepciones/detalle/${item.Key}`);
    },
  },
}
</script>

<style scoped>
.headerTable {
  color: #535B6C;
  font-size: 0.9em;
}
</style>
