<template>
  <q-page class="flex flex-center">

    <q-search v-model="searchModel" :debounce="600" placeholder="Pesquisar" icon="search"></q-search>

    <div style="width: 500px; max-width: 90vw;">
      <!-- {{getPartidoImage('36898')}} -->
      <!-- <img :src="getPartidoImage('36898')"/> -->
      <q-pull-to-refresh :handler="refresher">
        <q-list highlight inset-separator class="q-ma-sm" v-for="(partido, index) in partidos" :key="index" style="white">
          <q-item @click.native="goToParams('deputados',partido.sigla)">
            <!-- <q-item-main :label="getPartidoImage()" /> -->
            <!-- <img :src="getPartidoImage(partido.id)"/> -->
            <!-- <img :src="getPartidoImage('36898')"/> -->
            <!-- <q-item-main :label="partido.id" /> -->
            <q-item-main :label="partido.sigla" />
            <q-item-main :label="partido.nome" />
          </q-item>
          <q-item-separator />
        </q-list>
        <!-- <q-list highlight inset-separator class="q-ma-sm" v-for="(info, indexp) in infos" :key="indexp">
                  <q-item-main :label="info.nome" />
                </q-list> -->
      </q-pull-to-refresh>
    </div>

  </q-page>
</template>

<style>

</style>

<script>
  import {
    Notify
  } from "quasar";

  export default {
    name: "Partidos",
    data() {
      return {
        partidos: [],
        infos: null,
        searchModel: ""
      };
    },
    computed:{

    },
    methods: {
      goTo(route) {
        this.$router.push({
          name: route
        });
      },
      goToParams(route, param1) {
        this.$router.push({
          name: route,
          params: {
            id: param1
          }
        });
      },
      refresher(done) {
        setTimeout(() => {
          done();
          this.items.push({});
          showNotification("Lista atualizada com sucesso!");
        }, 1000);
      },
      showNotification(msg) {
        this.$q.notify({
          color: "negative",
          position: "top",
          message: msg,
          icon: "report_problem"
        });
      },
      getPartidoImage(id) {
        this.$q.loading.show({
          delay: 0,
          message: "Carregando..."
        });

        this.$axios
          .get("partidos/" + id)
          .then(response => {
            this.infos = response.data.dados;
          })
          .catch(() => {
            this.$q.notify({
              color: "negative",
              position: "top",
              message: "Falha no carregamento",
              icon: "report_problem"
            });
          });

        this.$q.loading.hide();

        var logo = this.infos.urlLogo;

        return logo == null ? "" : logo;
      }
    },
    mounted() {
      this.$q.loading.show({
        delay: 0,
        message: "Carregando..."
      });

      this.$axios
        .get("partidos?itens=100")
        .then(response => {
          this.partidos = response.data.dados;
        })
        .catch(() => {
          this.$q.notify({
            color: "negative",
            position: "top",
            message: "Falha no carregamento",
            icon: "report_problem"
          });
        });

      this.$q.loading.hide();
    }
  };
</script>
