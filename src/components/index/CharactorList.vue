<script setup lang="ts">
import { ref } from 'vue';
import charactorsData from '@/assets/charactors/charactors.json';

// Make index reactive
const index = ref(1);

// Function to find character by index
const findCharacter = (idx: number) => {
    return charactorsData.find((charactor) => charactor.num === idx);
};

// Reactive character data
const charactor = ref(findCharacter(index.value));

// Increment function
const incrementIndex = () => {
    if (index.value < 5) index.value += 1;
    else index.value = 0;
    charactor.value = findCharacter(index.value);
};

// Decrement function
const decrementIndex = () => {
    if (index.value > 0) index.value -= 1;
    else index.value = 5;
    charactor.value = findCharacter(index.value);
};

</script>

<template>
    <div class="d-flex w-100 position-relative">
        <!-- 左ボタン -->
        <button @click="decrementIndex" class="position-absolute"
            style="left: 3%; top: 560px; transform: translateY(-50%);">
            <img src="/public/indexPage/VectorL.png" alt="Previous">
        </button>

        <!-- メイン画像 -->
        <div class="d-flex justify-center w-100">
            <transition name="fade">
                <!-- Adjusted Main Image -->
                <img key="charactor.id" :src="`/indexPage/characters/portraits/${charactor!.id}.svg`"
                    :alt="`${charactor!.id}の画像`" style="width: 96%; margin: auto;">
            </transition>
        </div>
        <!-- 右ボタン -->
        <button @click="incrementIndex" class="position-absolute"
            style="right: 4%; top: 560px; transform: translateY(-50%);">
            <img src="/public/indexPage/VectorR.png" alt="Next">
        </button>
    </div>
</template>
<style scoped>
/* フェードエンターとフェードリーブのアニメーションを定義 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}
</style>
