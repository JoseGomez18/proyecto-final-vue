<template>
  <NavBar/>
  <HelloWorld />
  <FootComponet />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import NavBar from '../components/Navbar.vue'
import FootComponet from '../components/FootComponet.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    NavBar,
    FootComponet,
  },
});
</script>
