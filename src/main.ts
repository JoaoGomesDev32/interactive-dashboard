import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importar o Vue Router

const app = createApp(App);

app.use(router); // Usar o Vue Router

app.mount('#app');