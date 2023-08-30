<script setup>
import Head from "./Header.vue";
import { useRoute } from "vue-router";
import { reactive } from "vue";
const route=useRoute();
var border = reactive({});
function borders(event) {
 console.log(event.value);
 border.value=event.value;
 console.log(border.value);

}
</script>

<template>
    <Head />
    <router-view :key="route.path" :border="border"  @borders="borders"></router-view>
</template>

<style scoped></style>
