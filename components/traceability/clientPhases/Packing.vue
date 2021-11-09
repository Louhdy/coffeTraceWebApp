<template>
  <div>
    <v-card-title class="pt-4 titleCard">
      Empaquetado
    </v-card-title>
    <v-card-subtitle v-if="packing === null ? false : packing.newPacking.packageType !== null" class="subtitleSlider">
      <v-container>
        <v-row>
          <v-col cols="7">
            <span>Tipo:</span>
          </v-col>
          <v-col cols="5">
            <span>{{packing === null ? null : packing.newPacking.packageType}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Presentación:</span>
          </v-col>
          <v-col cols="5">
            <span>{{packing === null ? null : packing.newPacking.presentation}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Cantidad:</span>
          </v-col>
          <v-col cols="5">
            <span>{{packing === null ? null : packing.newPacking.amount}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0" align-self="center">
            <p style="text-align: center"><a @click="clicked">Consultar empaquetado</a></p>
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
  name: "Packing",
  components: {Pending},
  computed: {
    ...mapState({
      packing: state => state.packing.packing.packing,
    })
  },
  methods: {
    clicked() {
      this.$emit('selected', 'packing');
    },
  }

}
</script>

<style scoped>
.titleCard {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  justify-content: center;
  color: #30AC6E;
}
.subtitleSlider {
  font-size: 0.76rem;
  justify-content: center;
}
</style>
