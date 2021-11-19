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
            <img src="@/static/v.png" alt="user">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="user">
              {{
                user === null ? '' : user.name
              }}
            </v-list-item-title>
            <v-list-item-subtitle class="rol">
              {{
                user === null ? '' : user.role
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
import { getAuth, signOut } from "firebase/auth";
import {mapState} from "vuex";
import { doc, getDoc } from "firebase/firestore";
import {db} from "~/plugins/firebase";

export default {
  middleware: 'auth',
  fetchOnServer: false,
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      user: null,
      img: "@/static/IntegraCoffee.png",
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  async fetch() {
    const docRef = doc(db, "users", this.activeUser.email);
    const response = await getDoc(docRef);
    this.user = response.data();
    this.items = this.getItems(this.user.role);
  },
  computed: {
    ...mapState({
      activeUser: state => state.user,
    }),
  },
  methods: {
    getItems(role) {
      if (role === 'Almacenero') {
        return [
          {
            icon: 'mdi-apps',
            title: 'Recepción',
            to: '/recepciones'
          },
        ]
      } else if (role === 'Catador') {
        return [
          {
            icon: 'mdi-apps',
            title: 'Muestreo',
            to: '/recepciones'
          },
        ]
      } else if (role === 'Tostador') {
        return [
          {
            icon: 'mdi-apps',
            title: 'Tostado',
            to: '/recepciones'
          },
        ]
      } else {
        return [
          {
            icon: 'mdi-apps',
            title: 'Empaquetado',
            to: '/recepciones'
          },
        ]
      }

    },
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push('/auth/signin');
      }).catch((error) => {
        console.log(error);
      });

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

