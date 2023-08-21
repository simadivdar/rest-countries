<script setup>
const props = defineProps(['country'])
</script>

<template>
    <p class=" ">{{ country.capital }}</p>  
    <router-link  :to="{ name: 'show-country'}"></router-link> 
</template>

<style scoped>
</style>
