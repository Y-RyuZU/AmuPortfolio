<script setup lang="ts">
</script>

<template>
    <header class="page-header">
        <img class="top-image" src="@/indexPage/top.png" alt="Top Image">
        <img class="header-background" src="@/indexPage/headerBg.png" alt="Header Background">
    </header>
</template>


<style lang="scss" scoped>
.header-background {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    position: relative; // 通常のフローに従う
    top: -200px;
    z-index: 1; // この画像を背面に表示
}

.top-image {
    width: 100%;
    height: auto;
    position: relative;
    object-fit: cover;
    z-index: 10;
}
</style>