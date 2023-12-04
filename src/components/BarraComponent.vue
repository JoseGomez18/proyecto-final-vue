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
        <PerfilComponent />
      </a>
    </div>
  </section>
</template>

<style src="../Css/Barra.css"></style>
<script>
import CrearComponent from './CrearComponent.vue';
import PerfilComponent from './PerfilComponent.vue';

export default {
  name: "BarraComponent",
  components: {
    CrearComponent,
    PerfilComponent
  }
}
</script>