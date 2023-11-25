<template>
  <section id="container-barra">
    <div id="container-titulo">
      <h1>Instagram</h1>
    </div>
    <div id="container-botones">
      <a href="/">
        <button><i class="fas fa-home"></i>Home</button>
      </a>
      <button><i class="fas fa-light fa-square-plus"></i>Crear</button>
      <a href="/#/about">
        <button><i class="fas fa-solid fa-user-tie"></i>Perfil</button>
      </a>
    </div>
    <!-- <font-awesome-icon :icon="faHome" /> -->


  </section>
</template>

<style src="../Css/Barra.css"></style>
<script>

//    import { faHome } from '@fortawesome/free-solid-svg-icons';
//    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "BarraComponent",
  // Resto del componente <link>Vue</link>
}
</script>