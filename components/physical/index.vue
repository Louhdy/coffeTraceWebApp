<template>
  <v-row>
    <v-col>
      <v-card class="mt-2" max-width="100%" outlined>
        <v-slide-group
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(item, i) in analysis === null ? null : analysis.newAnalysis.analysis"
            :key="i"
          >
            <new-analysis :item="i + 1" :analysis="analysis === null ? null : item" @cancel="cancel"/>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";
import NewAnalysis from "~/components/physical/NewPhysical";

export default {
  name: "Physical",
  components: {
    NewAnalysis,
  },
  computed: {
    ...mapState({
      loading: state => state.receptions.reception.loading,
      analysis: state => state.analysis.physical.physicalAnalysis.analysis,
    }),
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
  }
}
</script>

<style scoped>

</style>
