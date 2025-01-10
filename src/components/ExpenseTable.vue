<template>
    <v-data-table :headers="headers" :items="expenses"></v-data-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { expenses } from "../store/expenses";

export default defineComponent({
    setup() {
        const headers = [
            { text: "Categoria", value: "category" },
            { text: "Data", value: "date" },
            { text: "Valor", value: "amount" },
        ];

        return { expenses, headers };
    },
});
</script>
