<template>
    <v-list>
        <v-list-item
            v-for="expense in expenses"
            :key="expense.id"
        >
            <v-list-item-content>
                <v-list-item-title>{{ expense.category }}</v-list-item-title>
                <v-list-item-subtitle>{{ expense.date }} - {{ formatCurrency(expense.amount) }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn icon @click="deleteExpense(expense.id)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-list-item>
    </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { expenses, deleteExpense } from "../store/expenses";

export default defineComponent({
    setup() {
        const formatCurrency = (amount: number) => {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
        };

        return { expenses, deleteExpense, formatCurrency };
    },
});
</script>