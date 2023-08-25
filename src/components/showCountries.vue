<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(["country"]);
var router=useRouter()
function pushRoute(countryName){
  router.push({ name:'show-country', params: { country: `${countryName}` } })
}
</script>

<template>
  <div class="col-12 col-sm-6 col-md-4 col-xl-3 g-5 px-md-3"  @click="pushRoute(country.cca3)">
    <div class="mb-3">
      <div class="card bg-white" >
        <img :src="country.flags.png" alt="flags"   class="card-img-top object-fit-cover" style="height: 180px;"/>
        <div class="card-body" style="height: 160px;">
          <h5 class="card-title my-2">{{ country.name.common }}</h5>
          <div><span>Population : </span><span>{{ country.population }}</span></div>
          <div><span>Region : </span><span>{{ country.region }}</span></div>
          <div><span>Capital : </span><span>{{ country.capital[0] }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
