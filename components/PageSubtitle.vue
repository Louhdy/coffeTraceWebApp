<template>
  <v-row justify="space-between" class="mt-0">
    <v-col cols="12" md="auto">
      <p class="primary-color  mb-0">
        <slot />
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PageSubtitle"
}
</script>

<style scoped>
.primary-color{
  font-size: 1.5rem;
  color: #535B6C
}
</style>
