<template>
    <v-container>
      <!-- Botón para mostrar el formulario -->
      <v-btn @click="showForm = true" color="primary">Crear Publicación</v-btn>
  
      <!-- Formulario -->
      <v-dialog v-model="showForm" max-width="600">
        <v-card>
          <v-card-title class="title">Crear Publicación</v-card-title>
  
          <v-card-text>
            <v-form ref="form">
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="post.title" label="Título" :rules="[v => !!v || 'El título es requerido']"></v-text-field>
                </v-col>
              </v-row>
  
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="post.imageLink" label="Enlace de la Foto" :rules="[v => !!v || 'El enlace de la foto es requerido']"></v-text-field>
                </v-col>
              </v-row>
  
              <v-row>
                <v-col cols="12">
                  <v-checkbox v-model="confirmation" label="Confirmar" :rules="[v => v || 'Debes confirmar']"></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
  
          <v-card-actions>
            <v-btn @click="cancel" color="error">Cancelar</v-btn>
            <v-btn @click="validateAndCreate" :disabled="!confirmation || !$refs.form.validate()" color="success">Crear</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false, // Variable para controlar la visibilidad del formulario
        post: {
          title: '',
          imageLink: '',
        },
        confirmation: false,
      };
    },
    methods: {
      createPost() {
        // Aquí puedes manejar la lógica para enviar el formulario
        console.log('Formulario enviado:', this.post);
        // Después de enviar, cierra el formulario
        this.showForm = false;
      },
      validateAndCreate() {
        // Validar el formulario antes de enviar
        if (this.$refs.form.validate()) {
          this.createPost();
        }
      },
      cancel() {
        // Aquí puedes manejar la lógica para cancelar el formulario
        console.log('Creación de publicación cancelada');
        // Cierra el formulario al cancelar
        this.showForm = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #262626; /* Color de texto de Instagram */
    margin-bottom: 20px;
  }
  </style>
  