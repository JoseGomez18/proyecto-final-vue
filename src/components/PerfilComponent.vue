<template>
  <div class="perfil-barra">
    <!-- Contenido del perfil -->
    <img class="perfil-foto" :src="fotico" alt="Foto de perfil">
    <p>{{ nombre }}</p>
    <p>{{ correo }}</p>
    <button @click="cerrar"><i class="fas fa-light fa-square-plus"></i>cerrar sesion</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "Nombre de Usuario", // Reemplaza con tu lógica para obtener el nombre
      correo: "usuario@ejemplo.com" // Reemplaza con tu lógica para obtener el correo
    };
  },
  computed: {
    fotico() {
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
  }
};
</script>

<style scoped>
/* Estilos específicos para la barra de perfil si es necesario */
.perfil-barra {
  width: 260px;
  height: 100%;
  background-color: #f0f0f0;
  position: fixed;
  gap: 15px;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.perfil-foto {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
}

</style>
