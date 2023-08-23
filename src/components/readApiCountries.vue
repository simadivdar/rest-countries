<script setup>
import Show from "./showCountries.vue";
import axios from "axios";
import Filter from "./filterDate.vue";
import { reactive, ref } from "vue";
var data = reactive({});
var region = ref("");
var name = ref("");
var countries = reactive({});
function getCountries() {
  let area = ref("all");
  if (region.value !== "all") {
    area.value = `region/${region.value}`;
  }
  axios
    .get(
      `https://restcountries.com/v3.1/${area.value}?fields=name,borders,capital,region,population,flags`
    )
    .then((response) => {
      console.log(response.data);
      data.value = response.data;
      countries.value = response.data;
      getCountryName(name);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function getRegion(event) {
  region.value = event.value;
  getCountries();
}
function getCountryName(event) {
  name.value = event.value.replace(
    event.value.substring(0, 1),
    event.value.substring(0, 1).toUpperCase()
  );
  countries.value = data.value.filter((country) =>
    country.name.common.startsWith(name.value)
  );
}
</script>
<template>
  <div class="py-5 my-5 px-2 px-md-5 bg-body-tertiary">
    <Filter @region="getRegion" @name="getCountryName" />
    <div class="row d-flex justify-content-center">
      <Show
        v-for="(country, index) in countries.value"
        :key="index"
        :country="country"
      />
    </div>
  </div>
</template>

<style scoped></style>
