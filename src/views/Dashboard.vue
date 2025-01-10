<template>
    <v-container>
        <ExpenseForm />
        <ExpenseChart />
        <ExpenseTable />
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ExpenseForm from "@/components/ExpenseForm.vue";
import ExpenseChart from "@/components/ExpenseChart.vue";
import ExpenseTable from "@/components/ExpenseTable.vue";

export default defineComponent({
    components: { ExpenseForm, ExpenseChart, ExpenseTable },
});
</script>
