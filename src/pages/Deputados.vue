<template>
  <q-page class="flex flex-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-pull-to-refresh :handler="refresher">
        <q-list highlight inset-separator class="q-ma-sm" v-for="(deputado, index) in deputados" :key="index">
          <q-item @click.native="goToParams('deputadosdespesas',deputado.id)" >
            <!-- <q-item-side :avatar="deputado.urlFoto" />
                  <q-item-main :label="deputado.nome" /> -->

            <q-item-side >
              <q-item-tile avatar>
                <img :src="deputado.urlFoto">
              </q-item-tile>
            </q-item-side>
            <q-item-main :label="deputado.nome"  />
            <q-item-side right>
              <q-item-tile icon="keyboard_arrow_right" color="green" />
            </q-item-side>
          
          </q-item>
          <q-item-separator />
        </q-list>
      </q-pull-to-refresh>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
import { Notify } from "quasar";

export default {
  name: "Deputados",
  data() {
    return {
      deputados: []
    };
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
    }
  },
  mounted() {
    this.$q.loading.show({
      delay: 0
    });
    this.$axios
      .get("deputados?itens=500&siglaPartido=" + this.$route.params.id)
      .then(response => {
        this.deputados = response.data.dados;
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
