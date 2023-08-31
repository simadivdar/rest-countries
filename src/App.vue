<script setup>
import Head from "../src/components/Header.vue";
import { useRoute } from "vue-router";
import { reactive } from "vue";
const route=useRoute();
var border = reactive({});
function borders(event) {
 border.value=event.value;
}

</script>

<template>
    <Head />
    <router-view :key="route.path" :border="border"  @borders="borders"></router-view>
</template>

<style scoped>
</style>
