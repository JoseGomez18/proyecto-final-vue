<template>
  <button id="f" @click.prevent="perfil"> <img class="k" :src="fotico" alt="Foto de perfil">Perfil</button>
  <div v-show="showPerfil" class="perfil-barra">
    <!-- Contenido del perfil -->
    <img class="perfil-foto" :src="fotico" alt="Foto de perfil">
    <p id="nombre">{{ nombre }}</p>
    <p id="correo">{{ correo }}</p>
    <button id="cerrar" @click="cerrar"><i class="fas fa-sign-out-alt"></i>Cerrar sesion</button>
  </div>
</template>

<style src="../Css/PerfilComponent.css"></style>

<script>
export default {
  data() {
    return {
      showPerfil: false
    }
  },
  computed: {
    fotico() {
      return this.$store.getters.obtenerFotico;
    },
    nombre() {
      return this.$store.getters.obtenerNombre;
    },
    correo() {
      return this.$store.getters.obtenerCorreo;
    }
  },
  methods: {
    cerrar() {
      localStorage.removeItem('validado');
      this.$store.commit('actualizarValidado', "false");
      this.$router.push('/login');
    },
    perfil() {
      this.showPerfil = !this.showPerfil
    }
  }
};
</script>
