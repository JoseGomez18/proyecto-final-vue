<template>
    <v-container id="buttonForm">
        <!-- Botón para mostrar el formulario -->
        <button @click="showForm = true"><i class="fas fa-light fa-square-plus"></i>Crear</button>

        <!-- Formulario -->
        <v-dialog v-model="showForm" max-width="600">
            <v-card class="card">
                <v-card-title class="title">Crear Publicación</v-card-title>

                <v-card-text>
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="titulo" label="Título"></v-text-field>
                                <p class="error">{{ validaciónTitulo }}</p>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-file-input class="field" accept="image/png, image/jpeg, image/bmp , image/jpg"
                                    placeholder="Escoge una foto de perfil" prepend-icon=""
                                    label="Click y escoge una imagen" @change="handleFileChange" v-model="foto">
                                </v-file-input>
                                <p>{{ foto.name }}</p>
                                <p class="error">{{ validaciónFoto }}</p>
                                <img class="preview" v-if="fotoPreview" :src="fotoPreview" alt="Vista Previa">
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <v-checkbox v-model="confirmation" label="Confirmar"
                                    :rules="[v => v || 'Debes confirmar']"></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-btn class="botones" @click="cancel" color="error">Cancelar</v-btn>
                    <v-btn class="botones" @click="createPost" :disabled="!confirmation" color="success">Crear</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<style src="../Css/CrearComponent.css"></style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            showForm: false, // Variable para controlar la visibilidad del formulario
            titulo: '',
            foto: '',
            confirmation: false,
            error: '',
            validaciónTitulo: '',
            validaciónFoto: '',
            fotoPreview: ''
        };
    },
    methods: {
        // encargado de manejar cambios en el input de tipo archivo (file input) 
        handleFileChange(event) {
            this.foto = event.target.files[0];

            if (this.foto) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.fotoPreview = e.target.result;
                };
                reader.readAsDataURL(this.foto);
            }
        },
        validate() {
            if (this.titulo == '') {
                this.validaciónTitulo = "Escribe un titulo"
                return false
            }
            if (this.titulo.length < 3 || this.titulo.length > 100) {
                this.validaciónTitulo = "El titulo debe tener minimo 3 caracteres y maximo 100"
                return false
            }
            if (this.foto == '') {
                this.validaciónFoto = "Escoge una imagen"
                return false
            }
            return true
        },
        async createPost() {
            if (this.validate()) {
                const formData = new FormData();
                formData.append('titulo', this.titulo);
                formData.append('foto', this.foto);

                const response = await axios.post('http://localhost:3000/crear', formData)

                // Después de enviar, cierra el formulario
                this.showForm = false;
                // recarga la pagina
                location.reload();
                return response
            }
        },
        cancel() {
            // Cierra el formulario al cancelar
            this.showForm = false;
        },
    },
};
</script>
  