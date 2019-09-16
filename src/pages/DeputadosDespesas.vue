<template>
<!-- <div style="width: 500px; max-width: 90vw;">
      <q-pull-to-refresh :handler="refresher">
        <q-list highlight inset-separator class="q-ma-sm" >
          <q-item>
            <q-item-side >
              <q-item-tile avatar>
                <img :src="deputadoDados.ultimoStatus.urlFoto">
              </q-item-tile>
            </q-item-side>
            <q-item-main :label="deputadoDados.ultimoStatus.nome"  />
            <q-item-side right>
              <q-item-tile icon="keyboard_arrow_right" color="green" />
            </q-item-side>
          
          </q-item>
          <q-item-separator />
        </q-list>
      </q-pull-to-refresh>
    </div> -->

<q-page class="flex center">

    <!-- <div>
      <div class="row" style="margin:10px; background-color:red;">
          <div class="col-3">
              <img :src="deputadoDados.ultimoStatus.urlFoto" style="width: 100%; height: auto;">
      </div>
      <div class="col-9">
          {{deputadoDados.ultimoStatus.nome}}
      </div>
      </div>
    </div> -->
<q-item>
    <q-item-side>
        <q-item-tile avatar>
            <img :src="deputadoDados.ultimoStatus.urlFoto">
              </q-item-tile>
    </q-item-side>
    <q-item-main :label="deputadoDados.ultimoStatus.nome" />
</q-item>

    <q-timeline responsive color="secondary" v-for="(deputado, index) in deputados" :key="index" style="margin:10px">
        <q-timeline-entry :title="deputado.tipoDespesa" :subtitle="deputado.dataDocumento" side="left">
            <div>

                <div class="row">
                    <div class="col-4">
                        Fornecedor:
                    </div>
                    <div class="col-8">
                        {{deputado.nomeFornecedor}}
                    </div>
                </div>

                <!-- <div class="row">
                    <div class="col-4">
                      Cnpj:
                    </div>
                    <div class="col-8">
                        {{deputado.cnpjCpfFornecedor}}
                    </div>
                  </div> -->

                <div class="row">
                    <div class="col-4">
                        Valor:
                    </div>
                    <div class="col-8">
                        {{deputado.valorDocumento | currency}}
                    </div>
                </div>
                <!-- <p>ano: {{deputado.ano}}</p>
                    <p>mes: {{deputado.mes}}</p>
                    <p>tipoDespesa: {{deputado.tipoDespesa}}</p>
                    <p>idDocumento: {{deputado.idDocumento}}</p>
                    <p>tipoDocumento: {{deputado.tipoDocumento}}</p>
                    <p>idTipoDocumento: {{deputado.idTipoDocumento}}</p>
                    <p>dataDocumento: {{deputado.dataDocumento}}</p>
                    <p>numDocumento: {{deputado.numDocumento}}</p> -->
                <!-- Valor: {{deputado.valorDocumento}} -->
                <!-- <p>urlDocumento: {{deputado.urlDocumento}}</p> -->
                <!-- Fornecedor: {{deputado.nomeFornecedor}} -->
                <!-- CNPJ: {{deputado.cnpjCpfFornecedor}} -->
                <!-- <p>valorLiquido: {{deputado.valorLiquido}}</p>
                    <p>valorGlosa: {{deputado.valorGlosa}}</p>
                    <p>numRessarcimento: {{deputado.numRessarcimento}}</p>
                    <p>idLote: {{deputado.idLote}}</p>
                    <p>parcela: {{deputado.parcela}}</p> -->
            </div>
        </q-timeline-entry>

        <q-item-separator />
    </q-timeline>
</q-page>
</template>

<style>
</style>

<script>
export default {
  name: "DeputadosDespesas",
  data() {
    return {
      deputados: [],
      deputadoDados: []
    };
  },
  methods: {
    goTo(route) {
      this.$router.push({
        name: route
      });
    }
  },
  filters: {
    formatCnpj(num) {
      return num.toFixed(2);
    }
  },
  mounted() {
    this.$axios
      .get(
        "deputados/" +
          this.$route.params.id +
          "/despesas?itens=100&ordem=desc&ordenarPor=ano"
      )
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
      }),
      this.$axios
        .get("deputados/" + this.$route.params.id)
        .then(response => {
          this.deputadoDados = response.data.dados;
        })
        .catch(() => {
          this.$q.notify({
            color: "negative",
            position: "top",
            message: "Falha no carregamento",
            icon: "report_problem"
          });
        });
  }
};
</script>
