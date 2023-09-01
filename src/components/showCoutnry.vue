<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
const route = useRoute();
var router = useRouter();
const props = defineProps(["border"]);
var country = route.params.country;
var data = reactive({});
var borderCountries = reactive({});
const pageLoading = ref("true");
const danger = ref("false");
function getCountry() {
  axios
    .get(`https://restcountries.com/v3.1/alpha?codes=${country}`)
    .then((response) => {
      data.value = response.data[0];
      data.value.currencies = Object.values(data.value.currencies);
      data.value.name.nativeName = Object.values(data.value.name.nativeName);
      data.value.languages = Object.values(
        data.value.languages
      ).toLocaleString();
      pageLoading.value = false;
      setBorders(data.value.borders);
    })
    .catch((error) => {
      console.log(error);
      danger.value = true;
    });
}
getCountry();
function pushRoute(countryName) {
  router.push({
    name: "show-country",
    params: { country: `${countryName}` },
    replace: true,
  });
}
function setBorders(event) {
  borderCountries.value = props.border.value.filter((border) =>
    event.includes(border.cca3)
  );
}
</script>

<template>
  <div
    class="min-vh-100 container-fluid mode pb-5" style="padding-top: 8rem;"
  >
    <div class="row d-flex justify-content-center">
      <div class="col-10 col-lg-11 mb-5 position-relative">
        <router-link to="/" class="link modeButton col-4 col-lg-1 py-2 px-5 rounded shadow-lg"
          ><ion-icon name="arrow-back-outline" class="position-absolute" style="top:.3rem; left:2.25rem;"></ion-icon
          >Back</router-link 
        >
      </div>
    </div>
    <div
      v-if="pageLoading"
      class="d-flex justify-content-center align-items-center justify-content-evenly mt-5 pt-5"
    >
      <div class="spinner-border text-secondary" role="status"></div>
      <div v-if="danger">
        <p>There was a problem sending your request</p>
        <button @click="getCountry()" class="modeButton" type="button">
          Try again
        </button>
      </div>
    </div>
    <div v-else class="">
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-lg-4">
          <img
            :src="data.value.flags.png"
            alt="flags"
            class="w-100"
            style="height: 320px"
          />
        </div>
        <div class="col-lg-1"></div>
        <div class="col-10 col-lg-6">
          <h5 class="fw-bolder fs-3 mt-5 mt-lg-2">
            {{ data.value.name.common }}
          </h5>
          <div
            class="d-block d-lg-flex justify-content-between align-items-center"
          >
            <div class="lh-lg col-5">
              <div>
                <span class="fw-bolder">Native Name: </span
                ><span>
                  {{
                    data.value.name.nativeName[
                      data.value.name.nativeName.length - 1
                    ].common
                  }}</span
                >
              </div>
              <div>
                <span class="fw-bolder">Population: </span
                ><span>{{ data.value.population.toLocaleString() }}</span>
              </div>
              <div>
                <span class="fw-bolder">Region: </span
                ><span>{{ data.value.region }}</span>
              </div>
              <div>
                <span class="fw-bolder">sub Region: </span
                ><span>{{ data.value.subregion }}</span>
              </div>
              <div>
                <span class="fw-bolder">Capital: </span
                ><span>{{ data.value.capital[0] }}</span>
              </div>
            </div>
            <div class="lh-lg col-5">
              <div class="mt-4 mt-lg-0">
                <span class="fw-bolder">Top Level Domain: </span
                ><span>{{ data.value.tld[0] }}</span>
              </div>
              <div>
                <span class="fw-bolder">Currencies: </span
                ><span> {{ data.value.currencies[0].name }}</span>
              </div>
              <div class="text-break">
                <span class="fw-bolder">Languages: </span
                ><span v-for="lang in data.value.languages">{{ lang }}</span>
              </div>
            </div>
          </div>
          <div class="pt-4 ">
            <span class="fw-bolder">Border Countries: </span
            ><span v-for="bord in borderCountries.value" class=""
              ><button @click="pushRoute(bord.cca3)" class="modeButton border m-1" style="padding: 2px 18px;">
                {{ bord.name }}
              </button></span
            >
            <span v-if="!data.value.borders" class="fs-5"
              >This country has no borders countries...!</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (min-width: 992px) {
  .margin {
    margin-left: 100px;
  }
}
</style>
