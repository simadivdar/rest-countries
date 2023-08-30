<script setup>
import Head from "../src/components/Header.vue";
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
  <div :class="mode" >
    <Head />
    <router-view :key="route.path"  :border="border"  @borders="borders"></router-view>
  </div>
</template>

<style scoped>
</style>
