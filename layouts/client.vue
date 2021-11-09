<template>
  <v-app class="default">
    <v-app-bar
      absolute
      color="black"
      height="85rem"
      fixed
      app
    >
      <v-container>
        <v-row justify="center">
          <v-img
            :src="require('../static/IntegraCoffee_Logo.png')"
            contain
            max-height="100"
            max-width="140"
          />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Client"
}
</script>

<style scoped>
.default{
  background: white;
}
.v-application {
  font-family: 'Montserrat', sans-serif;
}
</style>
