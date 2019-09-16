<template>
<!-- <q-page>
    <q-list>
        <q-collapsible style="margin:22px;" avatar="../statics/taiguara.jpg" label="Desenvolvedor">
            <div>
                Taiguara Duarte
                <p>Desenvolvedor do app</p>
            </div>
        </q-collapsible>
        <q-item-separator/>
        <q-collapsible style="margin:22px;" avatar="../statics/ricardo.png" label="Colaborador">
            <div>
                Ricardo Ferreira
                <p>Colaborador</p>
            </div>
        </q-collapsible>
    </q-list>
</q-page> -->

<q-list>
    <q-list-header>Desenvolvedor do App</q-list-header>
    <q-item>
        <q-item-side>
            <q-item-tile avatar>
                <img src="../statics/taiguara.jpg">
                </q-item-tile>
        </q-item-side>
        <q-item-main label="Taiguara Duarte" />
    </q-item>
    <q-item-separator />
    <q-list-header>Colaborador</q-list-header>
    <q-item>
        <q-item-side>
            <q-item-tile avatar>
                <img src="../statics/ricardo.png">
                </q-item-tile>
        </q-item-side>
        <q-item-main label="Ricardo Ferreira" />
    </q-item>
</q-list>

</template>

<style>
</style>

<script>
export default {
  name: "Sobre"
};
</script>
