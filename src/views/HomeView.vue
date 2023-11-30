<template>
  <!-- <NavBar/> -->
  <BarraComponent />
  <HelloWorld />
  <CrearComponent/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
// import NavBar from '../components/Navbar.vue'
import BarraComponent from '../components/BarraComponent.vue'
import CrearComponent from '../components/CrearComponent.vue'
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    CrearComponent,
    // NavBar,
    BarraComponent,
  },
});
</script>
