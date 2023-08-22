<script setup>
import Show from "./showCountries.vue";
import axios from "axios";
import Filter from "./filterDate.vue";
import { reactive,ref } from "vue";
const data = reactive({});
var region=ref("")
function getCountries() {
  let area=ref("all")
  if(region.value!=="all"){
    area.value=`region/${region.value}`;
  }
  axios
    .get(
      `https://restcountries.com/v3.1/${area.value}?fields=name,capital,currencies`
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
function getRegion( event){
    region.value=event.value;
    console.log(event.value)
    getCountries();
}

</script>

<template>
  <div class="py-5 my-4 px-5 bg-body-tertiary">
    <Filter @region="getRegion" />
    <p>{{ region }}</p>
    <Show
      v-for="(country, index) in data.value"
      :key="index"
      :country="country"
    />
  </div>
</template>

<style scoped></style>
