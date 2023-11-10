<template>
    <PageHeader />
    <div>
        <!-- add positon style must refact  -->
        <img src="/indexPage/middlebar_character.svg" alt="" :style="{

            objectFit: 'cover',
            width: '100%',
            position: 'relative',
            top: '-240px',
            zIndex: '2'
        }" />
        <CharactorCarousel />
        <img src="/indexPage/middlebar_datespot.svg" alt=""
            :style="{ objectFit: 'cover', width: '100%', position: 'relative' }" />
        <IconList />
    </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/index/PageHeader.vue'
import CharactorCarousel from '@/components/index/CharactorCarousel.vue'
import IconList from '@/components/index/IconList.vue';
</script>
