<template>
  <q-layout view="lHh Lpr lFf" :class="backgroundPage">
    <q-layout-header>
        <q-toolbar :class="colorToolbar" text-color="white" v-if="$route.name != 'login' && $route.name != 'splash'">
            <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
                <q-icon name="menu" />
            </q-btn>

            <q-btn flat round dense icon="arrow_back" @click.native="goTo('/partidos')"/>

            <q-toolbar-title>
                Política Transparente
                <span slot="subtitle">
                    Despesas dos políticos
                </span>
            </q-toolbar-title>

            <img src="../assets/logo.png" class="" style="width: 20%; height: auto;"/>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer no-swipe-open v-model="leftDrawerOpen" content-class="bg-primary" >
        <q-list no-border class="q-mt-md">
            <q-item v-for="(link, index) in drawerLinks" :key="index" @click.native="goTo(link.to)" style="color: #fff;">
                <q-item-side>
                    <q-icon :name="link.icon" style="color: #fff;" />
                </q-item-side>
                <q-item-main :label="link.label" />
            </q-item>
        </q-list>
    </q-layout-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",

  data() {
    return {
      leftDrawerOpen: false,
      drawerLinks: [
        {
          icon: "fas fa-credit-card",
          label: "Partidos",
          to: "partidos"
        },
        {
          icon: "fas fa-question-circle",
          label: "Sobre",
          to: "sobre"
        }
      ]
    };
  },

  methods: {
    goTo(route) {
      if (route != "login") {
        this.$router.push({ name: route });
      } else {
        this.$router.push({
          name: route,
          params: { not_show_fingerprint: true }
        });
      }
    }
  },

  computed: {
    colorToolbar() {
      // if (this.$route.name == 'cards') {
      //     return 'bg-primary'
      // }
      // else if (this.$route.name == 'card') {
      //     if ((this.$route.params.id + 1) % 4 == 0) {
      //         return 'bg-green'
      //     }
      //     else if ((this.$route.params.id + 1) % 3 == 0) {
      //         return 'bg-orange'
      //     }
      //     else if ((this.$route.params.id + 1) % 2 == 0) {
      //         return 'bg-yellow'
      //     }
      //     else if ((this.$route.params.id + 1) % 1 == 0) {
      //         return 'bg-blue'
      //     }
      // }
      return "";
    },

    backgroundPage() {
      // if (this.$route.name == 'cards') {
      //     return 'bg-page q-px-lg bg-primary'
      // }
      return "";
    }
  }
};
</script>

<style>
</style>
