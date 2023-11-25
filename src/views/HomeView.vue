<template>
  <!-- <NavBar/> -->
  <BarraComponent />
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
// import NavBar from '../components/Navbar.vue'
import BarraComponent from '../components/BarraComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    // NavBar,
    BarraComponent,
  },
});
</script>
