<template>
    <div class="character-card">
        <router-link :to="`/datespot/${character.id}`" class="character-link">
            <img :src="`/indexPage/characters/icons/${character.id}.png`" :alt="character.name" class="mb-2">
            <p
                style="color: #E93398; font-size: 25px; font-weight: 600; font-family: 'Hiragino Maru Gothic Pro', 'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic ProN', 'ヒラギノ丸ゴ ProN W4', sans-serif;">
                {{ character.name }}</p>
            <p style="color: #DCDCDC; font-size: 14px;">{{ character.spell }}</p>
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
  