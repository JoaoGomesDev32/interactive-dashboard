import { reactive } from "vue";

export interface Expense {
  id: number;
  date: string;
  category: string;
  amount: number;
}

export const expenses = reactive<Expense[]>([]);

export const addExpense = (expense: Expense) => {
  expenses.push({ ...expense, id: Date.now() });
};

export const deleteExpense = (id: number) => {
  const index = expenses.findIndex((e) => e.id === id);
  if (index !== -1) expenses.splice(index, 1);
};