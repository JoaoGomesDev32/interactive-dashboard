<template>
  <v-container>
    <Dashboard />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "@/components/Dashboard.vue";

export default defineComponent({
  name: "HomeView",
  components: { Dashboard },
});
</script>
