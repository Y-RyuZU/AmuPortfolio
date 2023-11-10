<template>
    <v-container>
        <v-simple-table dense class="elevation-1 info-table">
            <template v-for="(value, key) in dateSpot.info" :key="key">
                <tbody>
                    <tr>
                        <td class="pink lighten-2 white--text font-weight-bold">{{ key }}</td>
                        <td class="pink lighten-3 white--text">{{ value }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import dateSpots from '@/assets/dateSpots/kakku.json';

const dateSpot = ref(dateSpots[0]);
</script>
  
<style scoped>
.info-table td {
    border-bottom: 2px solid white;
}

/* 最後の行のボーダーを削除 */
.info-table tr:last-child td {
    border-bottom: none;
}
</style>