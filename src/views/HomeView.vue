<template>
  <BarraComponent />
  <PublicacionesComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import PublicacionesComponent from '../components/PublicacionesComponent.vue';
import BarraComponent from '../components/BarraComponent.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    PublicacionesComponent,
    BarraComponent,
  },
});
</script>
