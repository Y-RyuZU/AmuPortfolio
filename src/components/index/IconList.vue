<template>
    <v-container class="d-flex justify-center">
        <v-row>
            <v-col cols="12" md="4" v-for="character in firstThreeCharacters" :key="character.id">
                <CharacterCard :character="character" />
            </v-col>
            <v-col cols="12" md="4" v-for="character in secondThreeCharacters" :key="character.id">
                <CharacterCard :character="character" />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import charactorsData from '@/assets/charactors/charactors.json';
import CharacterCard from '@/components/index/CharactorCard.vue';

const arrangedCharactersData = ref(charactorsData.sort((a, b) => a.num - b.num));

const firstThreeCharacters = computed(() => arrangedCharactersData.value.slice(0, 3));
const secondThreeCharacters = computed(() => arrangedCharactersData.value.slice(3, 6));
</script>
  