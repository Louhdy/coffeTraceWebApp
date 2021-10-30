<template>
  <v-container>
    <Details
      :amount-bags="reception === null ? null: reception.newReception.amountBags"
      :producer="reception === null ? '' : reception.newReception.producer"
      :seed="reception === null ? '' : reception.newReception.seedType"
      :lot="reception === null ? null : reception.newReception.id"
    />
    <v-divider class="mt-3"/>
    <traceability/>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Details from "~/components/reception/Details";
import Traceability from "~/components/traceability";

export default {
  name: "Lot",
  components: {Traceability, Details},
  data() {
    return {
      model: null,
    }
  },
  computed: {
    ...mapState({
      loading: state => state.receptions.reception.loading,
      reception: state => state.receptions.reception.reception,
    }),
  },
  async mounted() {
    await this.getSelectedReception();
  },
  methods: {
    ...mapActions({
      getReception: 'receptions/reception/getReception',
      getPhysical: 'analysis/physical/physicalAnalysis/getPhysical',
      getSensorial: 'analysis/sensorial/sensorialAnalysis/getSensorial',
      getToast: 'toast/toast/getToast',
      getPacking: 'packing/packing/getPacking',
      getDistribution: 'distribution/distribution/getDistribution',
    }),
    async getSelectedReception() {
      await this.getReception(this.$route.params.id);
      await this.getPhysical(this.reception.newReception.physicalId);
      await this.getSensorial(this.reception.newReception.sensorialId);
      await this.getToast(this.reception.newReception.toastId);
      await this.getPacking(this.reception.newReception.packingId);
      await this.getDistribution(this.reception.newReception.distributionId);
    },
  }

}
</script>

<style scoped>

</style>
