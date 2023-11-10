<template>
    <Header />
    <v-main>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" align="center">
                    <h1>Date Spot: {{ chara }}</h1>
                    <img src="/dateSpot/recommendation/kakku.svg" alt="">

                    <v-row class="justify-center">
                        <div class="spots">
                            <img :src="`/dateSpot/spot/${chara}/${charactorSpot.id}.svg`" alt="">
                        </div>

                        <!-- Googleマップ用のカラム -->
                        <v-col cols="5" class="">
                            <div>
                                <iframe :src="charactorSpot.map_url" width="100%" height="331" style="border:0;"
                                    allowfullscreen="true" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </v-col>

                        <!-- InfoTableコンポーネント用のカラム -->
                        <v-col cols="5" class="">
                            <InfoTable />
                        </v-col>

                    </v-row>

                    <v-row class="d-flex justify-center">
                        <v-col cols="12" sm="6" md="4" lg="3">
                            <v-btn class="text-none text-h6 py-6" color="#FF7CC5" block rounded variant="elevated" to="/">
                                一覧に戻る
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/dateSpot/Header.vue'
import InfoTable from '@/components/dateSpot/InfoTable.vue'
import dateSpotjson from '@/assets/dateSpots/dateSpots.json'

const dateSpots = ref(dateSpotjson);
const charactorSpot = ref(dateSpots.value.kakku[0]);
const index = 0;
// console.log("charactor spot map", charactorSpot.value.map_url);

const route = useRoute()
const chara = ref('')

onMounted(() => {
    chara.value = route.params.chara as string
})
</script>

<style lang="scss">
.spots {
    padding-top: 80px;
}


.move-right {
    margin-left: 60px;
}
</style>
