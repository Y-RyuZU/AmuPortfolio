<template>
  <div class="character-card">
    <router-link :to="`/datespot/${character.id}`" class="character-link">
<!--      <div class="coin mb-2"-->
<!--           @mouseover="hover = true"-->
<!--           @mouseleave="hover = false"-->
<!--      >-->
<!--        <transition name="flip">-->
<!--          <div class="icon" v-show="!hover">-->
<!--            <img :src="`/indexPage/characters/icons/${character.id}.png`" :alt="character.name" class="mb-2">-->
<!--          </div>-->
<!--        </transition>-->
<!--        <transition name="flip">-->
<!--          <div class="icon" v-show="hover">-->
<!--            <img :src="`/indexPage/characters/icons/${character.id}_raw.png`" :alt="character.name">-->
<!--          </div>-->
<!--        </transition>-->
<!--      </div>-->
      <div class="coin">
        <div class="face front">
          <img :src="imgUrl" :alt="character.name" class="mb-2">
        </div>
        <div class="face back">
          <img :src="imgRawUrl" :alt="character.name" class="mb-2">
        </div>
      </div>
      <p
          style="color: #E93398; font-size: 25px; font-weight: 600; font-family: 'Hiragino Maru Gothic Pro', 'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic ProN', 'ヒラギノ丸ゴ ProN W4', sans-serif;">
        {{ character.name }}</p>
      <p style="color: #DCDCDC; font-size: 14px;">{{ character.spell }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {defineProps, ref} from 'vue'

const hover = ref(false)

const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const imgUrl = new URL(`@/../public/indexPage/characters/icons/${props.character.id}.png`, import.meta.url).href
const imgRawUrl = new URL(`@/../public/indexPage/characters/icons/${props.character.id}_raw.png`, import.meta.url).href
</script>

<style scoped class="scss">
.character-card .character-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  /* Optional: This ensures that the link color is the same as the text */
}

.coin {
  position: relative;
  width: 242px;
  height: 242px;
  perspective: 600px;
}

.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 242px;
  height: 242px;
  backface-visibility: hidden;
  transition: transform 1s;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.coin:hover .front {
  transform: rotateY(-180deg);
}

.coin:hover .back {
  transform: rotateY(0deg);
}
</style>
  