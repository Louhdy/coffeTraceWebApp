<template>
  <v-card
    class="ma-3"
    style="border:1px solid #30AC6E"
    width="295"
    outlined
  >
    <analysis v-if="item === 'analysis'" @selected="select"/>
    <toast v-if="item === 'toast'"/>
    <packing v-if="item === 'packing'"/>
    <distribution v-if="item === 'distribution'"/>
  </v-card>
</template>

<script>
import Toast from "~/components/traceability/clientPhases/Toast";
import Packing from "~/components/traceability/clientPhases/Packing";
import Distribution from "~/components/traceability/clientPhases/Distribution";
import Analysis from "~/components/traceability/clientPhases/Analysis";
export default {
  name: "ClientPhase",
  components: {Analysis, Distribution, Packing, Toast},
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
