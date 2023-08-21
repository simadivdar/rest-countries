<script setup>
import Show from "./showCountries.vue";
import axios from "axios";
import Filter from "./filterDate.vue";
import { reactive } from "vue";
const data = reactive({});
function getCountries() {
  axios
    .get(
      "https://restcountries.com/v3.1/region/europe?fields=name,capital,currencies"
    )
    .then((response) => {
      console.log(response.data);
      data.value = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getCountries();
</script>

<template>
  <div class="py-5 my-4 px-5 bg-body-tertiary">
    <Filter />
    <Show
      v-for="(country, index) in data.value"
      :key="index"
      :country="country"
    />
  </div>
</template>

<style scoped></style>
