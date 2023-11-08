<template>
    <v-app>
        <v-main>
            <v-container class="d-flex justify-center">
                <v-row justify="center">
                    <v-col cols="8">
                        <div>
                            <PageHeader />
                            <!-- add positon style must refact  -->
                            <FeaturedCharactor style="position: relative; top: -10px" />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import PageHeader from '@/components/index/PageHeader.vue'
import FeaturedCharactor from '@/components/index/CharactorFeature.vue'
</script>
