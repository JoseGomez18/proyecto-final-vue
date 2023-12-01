<template>
  <section id="container-barra">
    <div id="container-titulo">
      <h1><i class="fa-solid fa-bolt fa-beat" style="color: #000000;"></i>Flashpost</h1>
    </div>
    <div id="container-botones">
      <a href="/">
        <button><i class="fas fa-home"></i>Home</button>
      </a>
      <CrearComponent />
      <a href="">
        <button id="perfil"> <img class="k" :src="fotico" alt="Foto de perfil">Perfil</button>
      </a>

      <button @click="cerrar"><i class="fas fa-light fa-square-plus"></i>cerrar sesion</button>
    </div>
  </section>
</template>

<style src="../Css/Barra.css"></style>
<script>
import CrearComponent from './CrearComponent.vue';

export default {
  name: "BarraComponent",
  computed: {
    fotico() {
      console.log('Fotico en Vuex:', this.$store.getters.obtenerFotico);
      return this.$store.getters.obtenerFotico;
    }
  },
  methods: {
    cerrar() {
      console.log(this.$store.getters.obtenerValidado)
      localStorage.removeItem('validado');
      this.$store.commit('actualizarValidado', "false");
      this.$router.push('/login');
    }
  },
  components: {
    CrearComponent
  }

}
</script>