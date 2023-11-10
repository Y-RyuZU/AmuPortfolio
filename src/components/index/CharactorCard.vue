<template>
    <div class="character-card">
        <router-link :to="`/datespot/${character.id}`" class="character-link">
            <img :src="`/indexPage/characters/icons/${character.id}.png`" :alt="character.name" class="mb-2">
            <p>{{ character.name }}</p>
            <p>{{ character.spell }}</p>
        </router-link>
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
  
<style scoped>
.character-card .character-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: inherit;
    /* Optional: This ensures that the link color is the same as the text */
}
</style>
  