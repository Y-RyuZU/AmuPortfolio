<script setup lang="ts">
import charactorsData from '@/assets/charactors/charactors.json';
import charactorImages from '@/assets/charactors/image.json';
import { ref } from 'vue';

const index = 0;
const charactor = ref(charactorsData[index]);
const iamges = ref()
</script>

<template>
    <v-container class="d-flex justify-center mt-16">
        <v-col cols="5">
            <img :src="`/indexPage/charactors/${charactor.id}.png`" :alt="`${charactor.name}の画像`">
        </v-col>
        <v-col cols="5">
            <p class="text-h3 font-weight-bold" :style="{ color: charactor.theme_color }">{{ charactor.name }}</p>
            <p> {{ charactor.pronaunce }}</p>

            <p>{{ charactor.descripton }}</p>
            <v-container>
                <!-- other iamge -->
            </v-container>
            <table>
                <tr>
                    <th class="">年齢</th>
                    <th>{{ charactor.profile?.年齢 }}</th>
                </tr>
                <tr>
                    <th>身長</th>
                    <th>{{ charactor.profile?.身長 }}</th>
                </tr>
                <tr>
                    <th>体重</th>
                    <th>{{ charactor.profile?.体重 }}</th>
                </tr>
                <tr>
                    <th>出土</th>
                    <th>{{ charactor.profile?.出土 }}</th>
                </tr>
                <tr>
                    <th>所蔵</th>
                    <th>{{ charactor.profile?.所蔵 }}</th>
                </tr>

            </table>
        </v-col>
    </v-container>
    <v-container class="d-flex justify-center">
        <v-col cols="10">
            <p>{{ charactor.topic }}</p>
        </v-col>
    </v-container>
</template>
