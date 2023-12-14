<template>
    <PageHeader />
    <div :style="{
        objectFit: 'cover',
        width: '100%',
        position: 'relative',
        top: '-220px',
        padding: 0,
        margin: 0,
        zIndex: '2'
    }">
        <!-- add positon style must refact  -->
        <img src="@/indexPage/middlebar_character.svg" alt=""
            :style="{ objectFit: 'cover', width: '100%', position: 'relative' }" />
        <CharactorList :style="{
            objectFit: 'cover',
            paddingBottom: '148px',
            witdh: '100%',
        }" />
        <img src="@/indexPage/middlebar_datespot.svg" alt=""
            :style="{ objectFit: 'cover', width: '100%', position: 'relative' }" />
        <div style="margin-top: 148px;">
            <IconList />
        </div>
    </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/index/PageHeader.vue'
import IconList from '@/components/index/IconList.vue';
import CharactorList from '@/components/index/CharactorList.vue';
</script>
