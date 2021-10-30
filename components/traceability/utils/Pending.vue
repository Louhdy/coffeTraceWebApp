<template>
  <v-card-subtitle>
    <v-container class="mt-8">
      <v-row justify="center" align="center">
        <v-col>
          <p class="mb-0" style="text-align: center">
            <v-icon size="100" >
              mdi-progress-clock
            </v-icon>
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col class="pt-0 pb-0">
          <p style="text-align: center">Pendiente de registro</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pb-0 pt-0" align-self="center">
          <p style="text-align: center"><a @click="clicked">Registrar</a></p>
        </v-col>
      </v-row>
    </v-container>
  </v-card-subtitle>
</template>

<script>
export default {
  name: "Pending",
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
}
</script>

<style scoped>

</style>
