<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <template #prepend>
        <v-list-item class="ml-4 mt-1" two-line>
          <v-list-item-avatar>
            <img v-if="user ? user.img : false" src="@/static/v.png" alt="user">
            <div v-else class="user-icon">
              <div>{{ user ? user.sub[0] : "" }}</div>
            </div>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user">
              {{
                user ? user.sub : "---"
              }}
            </v-list-item-title>
            <v-list-item-subtitle class="rol">
              {{
                user ? user.email : "---"
              }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider class="mt-2 mb-4"/>
      <v-list dense nav max-width="94%" class="ml-2">
        <v-list-item-group
          color="teal"
        >
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link>
            <v-list-item-action class="ml-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template #append>
        <v-list dense nav>
          <v-list-item link >
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="logout">Cerrar sesión</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main class="grey lighten-5">
      <v-container class="lighten-5" style="height: 100%;width: 84%">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      user: {
        img: "@/static/IntegraCoffee.png",
        sub: "Melvin Gómez",
        email: "Almacenero"
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Recepción',
          to: '/recepciones'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Muestreo',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tostado',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut();
      await this.$router.push('/auth/signin');
    }
  }
}
</script>

<style scoped>
.user {
  font-weight: bold;
}
.rol {
  font-size: 0.78em;
}
.v-application {
  font-family: 'Montserrat', sans-serif;
}

</style>

