<template>
    <div class="row d-flex justify-center flex-wrap">
        <div class="d-flex justify-center mb-2" v-for="(character, index) in firstThreeCharacters" :key="character.id"
            :class="{ 'mx-78': index === 1 }">
            <CharacterCard :character="character" />
        </div>
    </div>
    <div class="row d-flex justify-center flex-wrap">
        <div class="d-flex justify-center mb-2" v-for="(character, index) in secondThreeCharacters" :key="character.id"
            :class="{ 'mx-78': index === 1 }">
            <CharacterCard :character="character" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import charactorsData from '@/assets/charactors/charactors.json';
import CharacterCard from '@/components/index/CharactorCard.vue';

const arrangedCharactersData = ref(charactorsData.sort((a, b) => a.num - b.num));

const firstThreeCharacters = computed(() => arrangedCharactersData.value.slice(0, 3));
const secondThreeCharacters = computed(() => arrangedCharactersData.value.slice(3, 6));
</script>

<style>
.mx-78 {
    margin-left: 78px;
    margin-right: 78px;
}
</style>
  
