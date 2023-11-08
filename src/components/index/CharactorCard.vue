<!-- CharacterCard.vue -->
<template>
    <div class="d-flex flex-column align-center">
        <img :src="`/indexPage/characters/icons/${character.id}.png`" :alt="character.name" class="mb-2">
        <p>{{ character.name }}</p>
        <p>{{ character.spell }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    character: {
        type: Object,
        required: true
    }
})
</script>
  