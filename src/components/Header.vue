<script setup>
import { ref, onMounted } from "vue";
var theme = ref("");
onMounted(() => {
  let localTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", localTheme); 
  theme.value=localTheme;
});
function toggleTheme() {
  theme.value = theme.value == "darkMode" ? "" : "darkMode";
  document.documentElement.setAttribute("data-theme", theme.value); 
  localStorage.setItem("theme", theme.value); 
}
</script>

<template>
  <nav class="px-4 py-4 fixed-top shadow-sm modeElement">
    <div class="d-flex justify-content-between align-items-center container-fluid">
      <h1 class="fs-6 fs-lg-5 fw-bold">Where in the world?</h1>
      <button class="modeButton" @click="toggleTheme()">
        <span v-if="theme==='darkMode'"
          ><ion-icon name="sunny-outline" class=""></ion-icon> Light Mode</span
        >
        <span v-else><ion-icon name="moon-outline"></ion-icon> Dark Mode</span>
      </button>
    </div>
  </nav>
</template>

<style scoped></style>
