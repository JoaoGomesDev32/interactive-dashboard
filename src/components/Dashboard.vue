<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <ChartComponent />
            </v-col>
            <v-col cols="12" md="6">
                <DataTable />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChartComponent from '@/components/ChartComponent.vue';
import DataTable from '@/components/DataTable.vue';

export default defineComponent({
    name: 'Dashboard',
    components: { ChartComponent, DataTable },
});
</script>
