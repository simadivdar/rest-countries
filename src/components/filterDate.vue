<script setup></script>

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
        >
          <option disabled>Filter by Regions</option>
          <option selected>All</option>
          <option value="1">Africa</option>
          <option value="2">America</option>
          <option value="3">Asia</option>
          <option value="4">Europe</option>
          <option value="5">Oceania</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
