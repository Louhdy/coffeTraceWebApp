<template>
  <div>
    <v-card-title class="pt-4 titleCard">
      Distribución
    </v-card-title>
    <v-card-subtitle v-if="distribution === null ? false : distribution.newDistribution.distributor">
      <v-container>
        <v-row>
          <v-col cols="7">
            <span>Distribuidor:</span>
          </v-col>
          <v-col cols="5">
            <span>{{distribution === null ? null : distribution.newDistribution.distributor}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Salida:</span>
          </v-col>
          <v-col cols="5">
            <span>{{distribution === null ? null : distribution.newDistribution.sended}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Estimado:</span>
          </v-col>
          <v-col cols="5">
            <span>{{distribution === null ? null : distribution.newDistribution.expectedDate}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0" align-self="center">
            <p style="text-align: center"><a @click="clicked">Consultar distribución</a></p>
          </v-col>
        </v-row>
      </v-container>
    </v-card-subtitle>
    <pending v-else/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Pending from "~/components/traceability/utils/Pending";
export default {
  name: "Distribution",
  components: {Pending},
  computed: {
    ...mapState({
      distribution: state => state.distribution.distribution.distribution,
    })
  },
  methods: {
    clicked() {
      this.$emit('selected', 'distribution');
    },
  }}
</script>

<style scoped>
.titleCard {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  justify-content: center;
  color: #30AC6E;
}
</style>
