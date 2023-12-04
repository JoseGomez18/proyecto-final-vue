<template>
  <button @click.prevent="perfil"> <img class="k" :src="fotico" alt="Foto de perfil">Perfil</button>

  <div v-show="showPerfil" class="perfil-barra">
    <!-- Contenido del perfil -->
    <img class="perfil-foto" :src="fotico" alt="Foto de perfil">
    <p>{{ nombre }}</p>
    <p>{{ correo }}</p>
    <button @click="cerrar"><i class="fas fa-solid fa-circle-xmark"></i>cerrar sesion</button>
  </div>
</template>

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

<style scoped>
/* Estilos específicos para la barra de perfil si es necesario */
.perfil-barra {
  transition: all 0.3s ease-in-out;
  width: 260px;
  height: 100%;
  background-color: #f0f0f075;
  position: fixed;
  gap: 15px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-left: 1px solid #dbdbdb;
}

.perfil-foto {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
}
</style>
