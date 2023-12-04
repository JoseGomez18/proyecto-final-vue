<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in   cards  " :key="card.title" :cols="card.flex">
          <div class="header-publi">
            <img class="k" :src="fotico" alt="Foto de perfil">
            <h2> <span>{{ nombre }}</span> <span>{{ card.fecha }}</span></h2>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
              </template>

              <v-list>

                <button class="boton-publi" @click="eliminar(card.id)">Eliminar</button>
                <ModificarComponent class="boton-publi" :idd="card.id" />

              </v-list>
            </v-menu>
          </div>
          <v-card>
            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="350px"
              cover>
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style src="../Css/Publicaciones.css"></style>

<script>
import axios from 'axios'
import ModificarComponent from './ModificarComponent.vue';

export default {
  name: "PublicacionesComponent", data: () => ({
    resul: "",
    cards: [],
    mostrarElement: false,
    items: [
      { title: 'Eliminar', methotd: "eliminar" },
      { title: 'Modificar', methotd: "dfdf" },
    ],
  }),
  computed: {
    fotico() {
      return this.$store.getters.obtenerFotico;
    },
    nombre() {
      return this.$store.getters.obtenerNombre;
    }
  },
  methods: {

    alternarVistaa() {
      this.mostrarElement = !this.mostrarElement;
    },

    hola() {
      console.log("pene")
    },

    async consultaPublicaciones() {
      const result = await axios.get('http://localhost:3000/tabla')
      this.resul = result.data
      this.cards = this.resul.map(item => ({
        id: item.id,
        title: item.titulo,
        src: `http://localhost:3000${item.imagen}`,
        fecha: item.fecha.substring(0, 10),
        flex: 12,
      }));
    },
    async eliminar(id) {
      await axios.delete(`http://localhost:3000/eliminar/${id}`)
      location.reload()
    }
  },
  mounted() {
    // Llama a consultaPublicaciones cuando el componente se monta
    this.consultaPublicaciones();
  },
  components: {
    ModificarComponent
  }
}
</script>
