<script setup>
import { useRouter} from "vue-router";
const props = defineProps(["country"]);
var router = useRouter();
function pushRoute(countryName) {
  router.push({ name: "show-country", params: { country: `${countryName}` } });
}

</script>

<template>
  
  <div
    class="col-12 col-sm-6 col-md-4 col-xl-3 g-5 px-md-3"
    @click="pushRoute(country.cca3)"
  >
    <div class="mb-3">
      <div class="shadow-sm modeElement rounded">
        <img
          :src="country.flags.png"
          alt="flags"
          class="card-img-top object-fit-cover"
          style="height: 180px"
        />
        <div class="p-4" style="height: 160px">
          <h5 class="fw-bolder">{{ country.name.common }}</h5>
          <div>
            <span class="weight">Population : </span
            ><span>{{ country.population.toLocaleString() }}</span>
          </div>
          <div>
            <span class="weight">Region : </span><span>{{ country.region }}</span>
          </div>
          <div>
            <span  class="weight">Capital : </span><span>{{ country.capital[0] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
