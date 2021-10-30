<template>
  <div>
    <v-card-title class="pt-4 titleCard">
      Análisis sensorial
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
          <v-col class="pt-0">
            <v-card class="mt-2" max-width="100%" outlined>
              <v-slide-group
                class="pa-4"
                show-arrows
              >
                <v-slide-item
                  v-for="(item, i) in sensorial === null ? null : sensorial.newSensorial.analysis"
                  :key="i"
                >
                  <v-card
                    width="142"
                    elevation="0"
                  >
                    <v-card-title class="titleSlider pl-0 pr-0 pt-0">
                      Muestra {{i + 1}}
                    </v-card-title>
                    <v-card-subtitle class="pa-0 subtitleSlider">
                      <v-container>
                        <v-row>
                          <v-col cols="8">
                            Puntaje:
                          </v-col>
                          <v-col cols="4">
                            {{item.score}}
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="pt-0" cols="8">
                            Obs:
                          </v-col>
                          <v-col class="pt-0" cols="4">
                            {{item.observation}}
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col class="pb-0" align-self="center">
                            <p class="pt-0 mt-0 pb-0 mb-0" style="text-align: center"><a @click="clicked">Consultar análisis</a></p>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-subtitle>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-card>
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
  name: "SensorialAnalysis",
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
