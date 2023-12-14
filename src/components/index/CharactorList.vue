<script setup lang="ts">
import {onMounted, ref} from 'vue';
import charactorsData from '@/assets/charactors/charactors.json';

const charactorsId = charactorsData.map((charactor) => charactor.id);
</script>

<template>
  <v-carousel height="auto" width="auto" hide-delimiters>
    <v-carousel-item v-for="id in charactorsId" :key="id" :src="`@/../indexPage/characters/portraits/${id}.svg`"/>
  </v-carousel>
</template>
<style scoped>

</style>
