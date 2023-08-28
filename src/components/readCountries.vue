<script setup>
import Head from "./Header.vue";
import { useRoute } from "vue-router";
const route=useRoute();
</script>

<template>
    <Head />
    <router-view :key="route.path"></router-view>
</template>

<style scoped></style>
