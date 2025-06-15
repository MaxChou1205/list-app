<script setup>
import baseFooter from "./components/baseFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <router-view />
    <baseFooter v-if="route.path !== '/'"></baseFooter>
  </div>
</template>

<style scoped></style>
