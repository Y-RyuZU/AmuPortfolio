<script setup lang="ts">
import { RouterView } from "vue-router";
import { computed } from "vue";
import Footer from '@/components/Footer.vue';
import { useRoute } from "vue-router";

const route = useRoute();
const isIndexPage = computed(() => route.path === '/'); // 例えば、indexページのパスが '/' の場合
</script>

<template>
    <v-app class="app-container">
        <RouterView />
        <Footer :class="{ 'adjusted-footer': isIndexPage }" />
    </v-app>
</template>

<style scoped lang="scss">
.app-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

.adjusted-footer {
    margin-top: -180px; // indexページの時だけ適用される
}
</style>
