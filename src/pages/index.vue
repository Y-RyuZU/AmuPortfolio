<template>
    <v-app>
        <v-main>
            <v-container class="d-flex justify-center">
                <v-row justify="center">
                    <v-col cols="8">
                        <div>
                            <PageHeader />
                            <!-- add positon style must refact  -->
                            <img src="/indexPage/middlebar_character.png" alt=""
                                :style="{ objectFit: 'cover', width: '100%', position: 'relative', top: '-20px', zIndex: '2' }" />
                            <CharactorCarousel />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import PageHeader from '@/components/index/PageHeader.vue'
import CharactorCarousel from '@/components/index/CharactorCarousel.vue'
</script>
