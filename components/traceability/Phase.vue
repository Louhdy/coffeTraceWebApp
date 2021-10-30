<template>
  <v-card
    class="ma-3"
    style="border:1px solid #30AC6E"
    width="295"
    outlined
  >
    <physical-analysis v-if="item === 'physical'" @selected="select"/>
    <sensorial v-if="item === 'sensorial'" @selected="select"/>
    <toast v-if="item === 'toast'"/>
    <packing v-if="item === 'packing'"/>
    <distribution v-if="item === 'distribution'"/>
  </v-card>
</template>

<script>
import Sensorial from "~/components/traceability/phases/Sensorial";
import Toast from "~/components/traceability/phases/Toast";
import Packing from "~/components/traceability/phases/Packing";
import Distribution from "~/components/traceability/phases/Distribution";
import PhysicalAnalysis from "~/components/traceability/phases/Physical";
export default {
  name: "Phase",
  components: {PhysicalAnalysis, Distribution, Packing, Toast, Sensorial},
  props: {
    item: {
      default: null,
      type: String,
    },
  },
  methods: {
    select(phase) {
      this.$emit('selected', phase);
    },
  }
}
</script>

<style scoped>

</style>
