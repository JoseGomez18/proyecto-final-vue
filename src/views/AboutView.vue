<template>
  <BarraComponent />
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

// Components
// import NavBar from '../components/Navbar.vue'
import BarraComponent from '../components/BarraComponent.vue'

export default ({
  name: 'AboutView',

  components: {
    BarraComponent,
  },
});
</script>
