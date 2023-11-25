<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="350px"
              cover>
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld", data: () => ({
    resul: "",
    cards: []
  }),
  methods: {
    async ConGet() {
      const result = await axios.get('http://localhost:3000/tabla')
      this.resul = result.data
      this.cards = this.resul.map(item => ({
        title: item.titulo,
        src: item.imagen,
        flex: 12,
      }));
    }
  },
  mounted() {
    // Llama a ConGet cuando el componente se monta
    this.ConGet();
  },
}
</script>
