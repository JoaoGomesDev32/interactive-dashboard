<template>
    <canvas ref="chart"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Chart } from "chart.js";
import { expenses } from "../store/expenses";

export default defineComponent({
    setup() {
        const chart = ref<HTMLCanvasElement | null>(null);

        onMounted(() => {
            const ctx = chart.value?.getContext("2d");
            if (ctx) {
                new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: expenses.map((e: { category: string; amount: number }) => e.category),
                        datasets: [
                            {
                                label: "Despesas",
                                data: expenses.map((e: { category: string; amount: number }) => e.amount),
                                backgroundColor: "rgba(75, 192, 192, 0.2)",
                                borderColor: "rgba(75, 192, 192, 1)",
                                borderWidth: 1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: { beginAtZero: true },
                        },
                    },
                });
            }
        });

        return { chart };
    },
});
</script>