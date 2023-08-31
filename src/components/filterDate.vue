<script setup>
import {ref} from "vue"
const region=ref("all")
const name=ref("")
const emit=defineEmits(['region','name'])
function sendRegion(){
    emit('region', region)
}
sendRegion();
function sendCountryName(){
    emit('name', name)
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="row container-fluid">
      <div class="col-12 col-sm-6 col-xl-4 position-relative">
        <ion-icon name="search-outline" class="position-absolute" style="top:1.5rem; left:2rem;"></ion-icon>
        <input
          class="modeInput shadow-sm"
          type="search"
          placeholder="Search for a country..."
          aria-label="Search"
          @input="sendCountryName()"
          v-model="name"
        />
      </div>
      <div class="col-8 col-sm-6 col-md-4 col-xl-3 pt-4 pt-sm-0">
        <select
          class="modeSelect shadow-sm"
          aria-label="Large select example"
          @change="sendRegion()"
          v-model="region"
        >
          <option disabled class="modeElement">Filter by Regions</option>
          <option selected value="all" class="modeElement">All</option>
          <option value="africa" class="modeElement">Africa</option>
          <option value="america" class="modeElement">America</option>
          <option value="asia" class="modeElement">Asia</option>
          <option value="europe" class="modeElement">Europe</option>
          <option value="oceania" class="modeElement">Oceania</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
