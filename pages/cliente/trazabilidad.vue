<template>
  <v-container fluid class="pa-0">
    <v-container class="default" fluid>
      <v-row style="justify-content: center; height: 12rem">
        <v-img
          class="productImg"
          :src="require('../../static/Café 2.jpeg')"
          contain
          max-height="200"
          max-width="340"
        />
      </v-row>
    </v-container>
    <v-container>
      <Details
        :amount-bags="reception === null ? null: reception.newReception.amountBags"
        :producer="reception === null ? '' : reception.newReception.producer"
        :seed="reception === null ? '' : reception.newReception.seedType"
        :lot="reception === null ? null : reception.newReception.id"
      />
      <v-divider class="mt-8"/>
      <client-traceability/>
    </v-container>
  </v-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Details from "~/components/reception/Details";
import ClientTraceability from "~/components/traceability/ClientTraceability";
export default {
  name: "Trazabilidad",
  components: {ClientTraceability, Details },
  layout: "client",
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
      await this.getPhysical(this.reception === null ? null: this.reception.newReception.physicalId);
      await this.getSensorial(this.reception === null ? null : this.reception.newReception.sensorialId);
      await this.getToast(this.reception === null ? null : this.reception.newReception.toastId);
      await this.getPacking(this.reception === null ? null : this.reception.newReception.packingId);
      await this.getDistribution(this.reception === null ? null : this.reception.newReception.distributionId);
    },
  }
}
</script>

<style scoped>
.default{
  background: #ECE9E9FF;
}
.productImg {
  position: absolute;
  padding-top: 20rem;
}
</style>
