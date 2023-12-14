<template>
    <Header/>
    <v-main>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" align="center">
                    <img :src="img" alt="">

                    <v-row class="d-flex justify-center">
                        <v-col cols="12" align="center">
                            <DateSpot v-for="spot in tmpCharactorSpot.spots" :key="spot.id" :chara="chara" :spot="spot" />
                        </v-col>
                    </v-row>

                    <v-row class="d-flex justify-center" :style="{ marginTop: '110px' }">
                        <v-col cols="12" sm="6" md="4" lg="3">
                            <router-link :to="`/`" class="text-decoration-none" style="font-weight: bold;">
                                <v-btn class="text-h6 py-6" color="#FF7CC5" block rounded
                                    style="font-weight: bold; font-family: 'Hiragino Maru Gothic Pro', 'ヒラギノ丸ゴ Pro W4', 'Hiragino Maru Gothic ProN', 'ヒラギノ丸ゴ ProN W4', sans-serif;"
                                    variant="elevated">
                                    一覧に戻る
                                </v-btn>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
  
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/dateSpot/Header.vue'
import InfoTable from '@/components/dateSpot/InfoTable.vue'
import dateSpotjson from '@/assets/dateSpots/dateSpots.json'
import DateSpot from '@/components/dateSpot/Spot.vue'

const dateSpots = ref(dateSpotjson);
const route = useRoute();
const chara = ref(route.params.chara as string);

interface Info {
    address: string;
    sales_time: string;
    holiday: string;
    fee: string;
    phone_number: string;
    url: string;
    transport: string;
    direction: string;
    parking?: string;
}

interface Spot {
    id: number;
    map_url?: string;
    info?: Info;
}

interface CharacterSpots {
    chara: string;
    spots: Spot[];
}

// dateSpots のデータ構造に基づいて、対応するスポットのリストを取得
const tmpCharactorSpot = computed(() => {
    const spots = dateSpots.value[chara.value as keyof typeof dateSpots.value] || [];
    return {
        chara: chara.value,
        spots: spots
    } as CharacterSpots;
});

console.log("tmpCharactorSpot", tmpCharactorSpot.value);
// console.log("charactor spot map", charactorSpot.value.map_url);

onMounted(() => {
    chara.value = route.params.chara as string
})

const img = computed(() => `@/dateSpot/recommendation/${chara.value}.svg`);
</script>

<style lang="scss">
.spots {
    padding-top: 80px;
}


.move-right {
    margin-left: 60px;
}
</style>
