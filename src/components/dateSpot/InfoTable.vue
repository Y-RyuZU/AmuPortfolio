<template>
    <v-container>
        <table class="info-table">
            <tr class="pa-4" :style="{ borderTop: '1.5px solid #EE6BB4' }">
                <th>住所</th>
                <td>{{ info?.address }}</td>
            </tr>
            <tr>
                <th>営業時間</th>
                <td>{{ info?.sales_time }}</td>
            </tr>
            <tr>
                <th>料金</th>
                <td>{{ info?.fee }}</td>
            </tr>
            <tr>
                <th>電話番号</th>
                <td>{{ info?.phone_number }}</td>
            </tr>
            <tr>
                <th>URL</th>
                <td>{{ info?.url }}</td>
            </tr>
            <tr>
                <th>{{ info?.transport }}</th>
                <td>{{ info?.direction }}</td>
            </tr>
            <tr v-if="info?.parking">
                <th>駐車場</th>
                <td>{{ info.parking }}</td>
            </tr>
        </table>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import dateSpots from '@/assets/dateSpots/dateSpots.json';

const dateSpot = ref(dateSpots.kakku[0]);
const props = defineProps({
    info: Object
});
</script>
  
<style scoped>
.info-table th {
    background-color: rgba(238, 107, 180, 0.6);
    font-weight: 500;
}

.info-table td {
    /* ここでは標準のピンク色を使用しています */
    padding: 7px 0 7px 28px;
    font-weight: 500;
}

.info-table tr {
    border-bottom: 1.5px solid #EE6BB4;
}

.info-table {
    border-collapse: collapse;
}

.value-cell {
    background-color: white;
    font-weight: bold;
    /* ここでは薄いピンク色を使用しています */
    border-bottom: 3px solid black;
}
</style>
  