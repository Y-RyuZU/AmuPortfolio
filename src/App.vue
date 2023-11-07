<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "@/components/index/Header.vue"
</script>

<template>
    <v-app>
        <Header />
        <v-main>

            <RouterView />

        </v-main>
    </v-app>
</template>

<style scoped lang="scss"></style>

<style lang="scss"></style>
