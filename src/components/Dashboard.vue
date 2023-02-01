<template>
  <div data-theme="black">
    <Navigation />
    <DropDown data-theme="black" />
    <Application />
  </div>
</template>

<script setup>
import Application from "./Application.vue";

import DropDown from "./DropDown.vue";
import Navigation from "./Navigation.vue";
</script>
