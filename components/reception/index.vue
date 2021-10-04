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
        <p class="headerTable">Seleccione el lote al que agregar el análisis físico</p>
        <search-table
          table-title="Recepciones"
          :full-name="true"
          :headers="headers"
          :items="quotations"
          :search="search"
          search-text="Busca por nombre o DNI del paciente"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from "~/components/PageTitle";
import SearchBox from "~/components/search/SearchBox";
import OptionButton from "~/components/dataTable/OptionButton";
import SearchTable from "~/components/dataTable/SearchTable";

export default {
  name: "Recepción",
  components: {SearchTable, OptionButton, SearchBox, PageTitle },
  data() {
    return {
      search: '',
      headers: [
        { text: 'N° de lote', align: 'start', value: 'clientName', filterable: true },
        { text: 'Productor', value: 'ruc' },
        { text: 'Tipo de semilla', value: 'date', width: '18%'},
        { text: 'Fecha de registro', value: 'serviceType', width: '25%' },
        { text: 'Detalle', value: 'amount' },
      ],
      quotations: [
        { clientName: '0001', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: '0002', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: '0003', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: '0004', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
        { clientName: '0005', ruc: '20412412423', date: '12/07/2021', serviceType: 'TI - Cloud Backup', amount:'12,000' },
      ],
    };
  },
  methods: {
    handleOptionClick() {
      this.$router.push('/recepciones/nueva-recepcion')
    }
  },
}
</script>

<style scoped>
.headerTable {
  color: #535B6C;
  font-size: 0.9em;
}
</style>
