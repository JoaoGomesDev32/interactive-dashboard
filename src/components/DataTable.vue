<!-- <template>
  <v-card>
    <v-card-title>Tabela de Usuários</v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-1"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "DataTable",
  setup() {
    const state = reactive({
      headers: [
        { text: "Nome", value: "name" },
        { text: "Email", value: "email" },
        { text: "Idade", value: "age" },
      ],
      users: [
        { name: "João Gomes", email: "joao@example.com", age: 34 },
        { name: "Maria Silva", email: "maria@example.com", age: 29 },
        { name: "Carlos Souza", email: "carlos@example.com", age: 41 },
      ],
    });

    return state;
  },
});
</script>

<style scoped>
.v-data-table {
  max-width: 100%;
}
</style> -->
