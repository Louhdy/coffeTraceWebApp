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
            v-for="(item, i) in sensorial === null ? null : sensorial.newSensorial.analysis"
            :key="i"
          >
            <new-sensorial :item="i + 1" :analysis="sensorial === null ? null : item" @cancel="cancel"/>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";
import NewSensorial from "~/components/sensorial/NewSensorial";

export default {
  name: "Sensorial",
  components: {NewSensorial},
  computed: {
    ...mapState({
      loading: state => state.receptions.reception.loading,
      reception: state => state.receptions.reception.reception,
      sensorial: state => state.analysis.sensorial.sensorialAnalysis.sensorial,
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
