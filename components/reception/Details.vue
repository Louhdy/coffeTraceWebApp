<template>
  <div>
    <page-title>
      Recepción de lotes
    </page-title>
    <p style="font-family: 'Montserrat', sans-serif; font-weight: 300" class="mt-13"> DATOS DEL LOTE </p>
    <v-row>
      <v-col md="2">
        <v-icon class="mr-2" color="grey" small>mdi-square-rounded</v-icon>
        <span style="font-weight: 300">Lote:</span>
      </v-col>
      <v-col md="4">
        <span style="color: black">{{ lot }}</span>
      </v-col>
      <v-col md="3">
        <v-icon class="mr-2" color="grey" small>mdi-square-rounded</v-icon>
        <span style="font-weight: 300"> Cantidad de sacos:</span>
      </v-col>
      <v-col md="3">
         <span style="color: black">{{ amountBags }}</span>
      </v-col>
    </v-row>
    <v-row style="font-family: 'Montserrat', sans-serif">
      <v-col md="2">
        <v-icon class="mr-2" color="grey" small>mdi-square-rounded</v-icon>
        <span style="font-weight: 300">Productor:</span>
      </v-col>
      <v-col md="4">
        <span style="color: black">{{ producer }}</span>
      </v-col>
      <v-col>
        <v-icon class="mr-2" color="grey" small>mdi-square-rounded</v-icon>
        <span style="font-weight: 300">Semilla:</span>
      </v-col>
      <v-col>
        <span style="color: black">{{ seed }}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import PageTitle from "~/components/PageTitle";

export default {
  name: "Details",
  components: {
    PageTitle,
  },
  props: {
    lot: {
      default: null,
      type: Number,
    },
    producer: {
      default: '',
      type: String,
    },
    amountBags: {
      default: null,
      type: Number,
    },
    seed: {
      default: '',
      type: String,
    },
  }
}
</script>

<style scoped>
html {
  font-family: 'Montserrat', sans-serif;
}
</style>
