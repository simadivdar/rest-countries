<script setup>
import {ref} from "vue"
const region=ref("all")
const emit=defineEmits(['region'])
function sendRegion(){
    console.log(region.value);
    emit('region', region)
}
sendRegion();
</script>

<template>
  <nav class="navbar navbar-expand-lg py-5">
    <div class="row d-flex container-fluid">
      <div class="col-5">
        <input
          class="form-control form-control-lg shadow-sm"
          type="search"
          placeholder="Search for a country..."
          aria-label="Search"
        />
      </div>
      <div class="col-3">
        <select
          class="form-select form-select-lg shadow-sm"
          aria-label="Large select example"
          @change="sendRegion()"
          v-model="region"
        >
          <option disabled>Filter by Regions</option>
          <option selected value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  </nav>
  <p>{{ region }}</p>
</template>

<style scoped></style>
