<template>
  <div>
    <v-card-title class="pt-4 titleCard">
      Análisis
    </v-card-title>
    <v-card-subtitle v-if="sensorial !== null">
      <v-container>
        <v-row>
          <v-col cols="7">
            <span>Muestras:</span>
          </v-col>
          <v-col cols="5">
            <span>{{sensorial === null ? null : sensorial.newSensorial.analysis.length}}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="7">
            <span>Puntaje obtenido:</span>
          </v-col>
          <v-col cols="5">
            <span>{{calculateScore()}}</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card-subtitle>
    <pending v-else @clicked="clicked"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Pending from "~/components/traceability/utils/Pending";

export default {
  name: "Analysis",
  components: {Pending},
  computed: {
    ...mapState({
      sensorial: state => state.analysis.sensorial.sensorialAnalysis.sensorial,
    })
  },
  methods: {
    clicked() {
      this.$emit('selected', 'sensorial');
    },
    calculateScore() {
      if (this.sensorial === null) return;
      let score = 0;
      for (const item in this.sensorial.newSensorial.analysis) {
        score += this.sensorial.newSensorial.analysis[item].score;
        console.log(item);
      }
      console.log(score)
      console.log(this.sensorial.newSensorial.analysis.length)
      return score/this.sensorial.newSensorial.analysis.length
    }
  }
}
</script>

<style scoped>
.subtitleSlider {
  font-size: 0.76rem;
  justify-content: center;
}
.titleSlider {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  justify-content: center;
}
.titleCard {
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  justify-content: center;
  color: #30AC6E;
}
</style>
