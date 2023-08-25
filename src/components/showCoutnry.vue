<script setup>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const country = route.params.country;
var data = reactive({});
onMounted(() => {
  axios
    .get(`https://restcountries.com/v3.1/alpha?codes=${country}`)
    .then((response) => {
      data.value = response.data[0];
      console.log(data.value);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div v-if="data.value" class="vh-100 d-flex justify-content-center align-items-center">
    <div class="row container-fluid">
      <div class="d-flex justify-content-center">
        <div class="col-2 col-md-4 ">
          <img
            :src="data.value.flags.png"
            alt="flags"
            class="object-fit-cover"
            style="height: 180px"
          />
        </div>
        <div class="col-2 col-md-4" style="height: 160px">
          <h5 class="">{{ data.value.name.common }}</h5>
          <div>
            <span>Population : </span><span>{{ data.value.population }}</span>
          </div>
          <div>
            <span>Region : </span><span>{{ data.value.region }}</span>
          </div>
          <div>
            <span>Capital : </span><span>{{ data.value.capital[0] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
