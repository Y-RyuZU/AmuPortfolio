<template>
    <Header />
    <v-main>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-col cols="12" align="center">
                    <h1>Date Spot: {{ spot }}</h1>
                    <img src="/dateSpot/recommendation/kakku.svg" alt="">
                    <div class="spots">
                        <img src="/dateSpot/spot/kakku/1.svg" alt="">
                    </div>
                    <v-row class="justify-center">

                        <!-- Googleマップ用のカラム -->
                        <v-col cols="5" md="5" class="">
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2975.5864557968225!2d140.7225139!3d41.7725732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9ef3a1f07738f5%3A0xe47eb57cda1a1f95!2z5Ye96aSo5pyd5biCIOmnheS6jOW4guWgtA!5e0!3m2!1sja!2sjp!4v1699513024432!5m2!1sja!2sjp"
                                    width="544" height="331" style="border:0;" allowfullscreen="true" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </v-col>

                        <!-- InfoTableコンポーネント用のカラム -->
                        <v-col cols="5" md="5" class="">
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

const route = useRoute()
const spot = ref('')

onMounted(() => {
    spot.value = route.params.spot as string
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
