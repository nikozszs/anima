<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './components/layout/MainLayout.vue';
import { RouterView } from 'vue-router'
</script>

