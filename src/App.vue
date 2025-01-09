<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/views/Home.vue';

export default defineComponent({
  name: 'App',
  components: { Home },
});
</script>
