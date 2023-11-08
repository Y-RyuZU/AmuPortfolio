<script setup lang="ts">
import charactorsData from '@/assets/charactors/charactors.json';
import { ref } from 'vue/dist/vue.js';

const charactor = ref(charactorsData.test);
</script>

<template>
    <img src="/indexPage/charactor/middlebar_character.png" alt="" style="width: 100%; height: auto" />
    <p>{{ charactor }}</p>
</template>
