<template>
  <v-card>
    <v-card-title>Gráfico de Vendas</v-card-title>
    <v-card-text>
      <canvas ref="chart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Chart from "chart.js/auto";

export default defineComponent({
  name: "ChartComponent",
  setup() {
    const chart = ref<HTMLCanvasElement | null>(null);

    onMounted(() => {
      if (chart.value) {
        new Chart(chart.value, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Vendas (em $)",
                data: [5000, 10000, 7500, 12500, 15000, 20000],
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.1)",
                borderWidth: 2,
              },
            ],
          },
        });
      }
    });

    return { chart };
  },
});
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
