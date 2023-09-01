<script setup>
import Show from "./showCountries.vue";
import axios from "axios";
import Filter from "./filterDate.vue";
import { reactive, ref } from "vue";
const emit = defineEmits(["borders"]);
var data = reactive({});
var region = ref("");
const pageLoading = ref("true");
var name = ref("");
var borders = reactive([]);
var countries = reactive({});
function getCountries() {
  let area = ref("all");
  if (region.value !== "all") {
    area.value = `region/${region.value}`;
  }
  axios
    .get(
      `https://restcountries.com/v3.1/${area.value}?fields=name,borders,cca3,capital,region,population,flags`
    )
    .then((response) => {
      data.value = response.data;
      countries.value = response.data;
      getCountryName(name);
      setBorders(countries);
      pageLoading.value = false;
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
function setBorders(countries) {
  borders.value = countries.value.map((border) => ({
    cca3: border.cca3,
    name: border.name.common,
  }));
  emit("borders", borders);
}
</script>
<template>
  <div class="px-2 px-md-5 mode" style="padding-top: 8rem;" >
    <Filter @region="getRegion" @name="getCountryName"/>
    <div
      v-if="pageLoading"
      class="min-vh-100 d-flex justify-content-center justify-content-evenly mt-5"
    >
      <p class="">Please wait...!</p>
      <div class="spinner-border text-secondary" role="status"></div>
      <button @click="getCountries()" class="modeButton p-2 rounded" type="button" style=" height: 3rem;">
        <span class=""></span>
        Try again
      </button>
    </div>
    <div v-else class="row d-flex justify-content-center">
      <Show
        v-if="countries.value.length"
        v-for="(country, index) in countries.value"
        :key="index"
        :country="country"
      />
      <div v-else class="min-vh-100 row d-flex justify-content-center pt-5 fs-4">
        No country found..!
      </div>
    </div>
  </div>
</template>

<style scoped></style>
