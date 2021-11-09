<template>
  <div>
    <v-card-title class="pt-4 titleCard">
      Tostado
    </v-card-title>
    <v-card-subtitle v-if="toast === null ? false : toast.newToast.toastType !== null">
      <v-container>
        <v-row>
          <v-col cols="7">
            <span>Tipo:</span>
          </v-col>
          <v-col cols="5">
            <span>{{toast === null ? null : toast.newToast.toastType}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Molido:</span>
          </v-col>
          <v-col cols="5">
            <span>{{toast === null ? null : toast.newToast.ground}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Peso (Kg):</span>
          </v-col>
          <v-col cols="5">
            <span>{{toast === null ? null : toast.newToast.weight}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-0" align-self="center">
            <p style="text-align: center"><a @click="clicked">Consultar tostado</a></p>
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
  name: "Toast",
  components: {Pending},
  computed: {
    ...mapState({
      toast: state => state.toast.toast.toast,
    })
  },
  methods: {
    clicked() {
      this.$emit('selected', 'toast');
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
</style>
