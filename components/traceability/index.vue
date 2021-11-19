<template>
  <v-container class="pl-0 pr-0">
    <page-subtitle>
      Trazabilidad del producto
    </page-subtitle>
    <v-row v-if="selectedPhase === null" justify="space-between">
      <v-col cols="12" md="12" class="pr-0">
        <p style="color: #535B6C; font-size: 0.9em;" class="mb-0 pb-0">Seleccione una etapa para ver el detalle</p>
        <v-slide-group
          v-model="model"
          class="pt-0"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(item, idx) in phases"
            :key="idx"
          >
            <phase :item="item" @selected="showDetails"/>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <physical v-if="selectedPhase === 'physical'" @cancel="restoreTrace"/>
    <sensorial v-if="selectedPhase === 'sensorial'" @cancel="restoreTrace"/>
    <toast v-if="selectedPhase === 'toast'" @cancel="restoreTrace"/>
  </v-container>
</template>

<script>
import Phase from "~/components/traceability/Phase";
import PageSubtitle from "~/components/PageSubtitle";
import Physical from "~/components/physical";
import Sensorial from "~/components/sensorial";
import Toast from "~/components/toast";
export default {
  name: "Traceability",
  components: {Toast, Sensorial, Physical, PageSubtitle, Phase},
  data() {
    return {
      model: null,
      phases: ['physical', 'sensorial', 'toast', 'packing', 'distribution'],
      selectedPhase: null,
    }
  },
  methods: {
    showDetails(phase) {
      this.selectedPhase = phase;
    },
    restoreTrace() {
      this.selectedPhase = null;
    }
  }
}
</script>

<style scoped>
</style>
