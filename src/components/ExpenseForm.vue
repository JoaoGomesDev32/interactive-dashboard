<template>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field label="Categoria" v-model="category" required></v-text-field>
      <v-text-field label="Data" v-model="date" type="date" required></v-text-field>
      <v-text-field label="Valor" v-model="amount" type="number" required></v-text-field>
      <v-btn type="submit" color="primary">Adicionar Despesa</v-btn>
    </v-form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import { addExpense } from "@/store/expenses";
  
  export default defineComponent({
    setup() {
      const category = ref("");
      const date = ref("");
      const amount = ref(0);
  
      const handleSubmit = () => {
        addExpense({ id: 0, category: category.value, date: date.value, amount: amount.value });
        category.value = "";
        date.value = "";
        amount.value = 0;
      };
  
      return { category, date, amount, handleSubmit };
    },
  });
  </script>
  