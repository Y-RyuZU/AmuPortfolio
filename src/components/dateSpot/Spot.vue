<template>
    <div style="position: relative;">
        <div class="spots" style="position: relative; left: 0; bottom: 0; z-index: 1;">
            <!-- ここに他のコンテンツが入ります -->
            <img :src="`/dateSpot/spot/${chara}/${spot!.id}.svg`" alt="" style="z-index: 1;">
        </div>

        <div style="margin-top: -341px; margin-left: -430px; z-index: 101; position: relative;">
            <iframe :src="spot!.map_url" width="554" height="331" style="border:0;" allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import InfoTable from '@/components/dateSpot/InfoTable.vue';

const props = defineProps({
    chara: String,
    spot: Object
});
</script>
