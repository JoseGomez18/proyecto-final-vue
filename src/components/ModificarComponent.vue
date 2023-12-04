<template>
    <v-container id="buttonForm">
        <!-- <button class="botonModi" @click="showForm = true">Modificar</button> -->
        <button class="botonModi" @click.stop="showForm = !showForm">Modificar</button>
        <!-- Botón para mostrar el formulario -->

        <!-- Formulario -->
        <v-dialog v-model="showForm" max-width="600">
            <v-card class="card">
                <v-card-title class="title">Modificar Publicación</v-card-title>

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
                                    label="Click y escoge una imagen" @change="handleFileChange" :v-model="foto">
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
                    <v-btn @click="cancel" color="error">Cancelar</v-btn>
                    <v-btn @click="modificatePost" :disabled="!confirmation" color="success">Modificar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
  
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
            fotoPreview: '',
            id: ''
        };
    },
    methods: {
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
        async modificatePost() {
            if (this.validate()) {
                const formData = new FormData();
                formData.append('titulo', this.titulo);
                formData.append('foto', this.foto);

                const response = await axios.patch(`http://localhost:3000/modificar/${this.id}`, formData)

                // Después de enviar, cierra el formulario
                this.showForm = false;
                location.reload()
                return response
            }
        },
        cancel() {
            // Aquí puedes manejar la lógica para cancelar el formulario
            console.log('Creación de publicación cancelada');
            // Cierra el formulario al cancelar
            this.showForm = false;
        },
    },
    props: {
        idd: String
    },
    mounted() {
        // Asigna el valor de idd a la propiedad id después de que el componente se haya montado
        this.id = this.idd;
    },
};
</script>
  
<style scoped>
#buttonForm {
    padding: 0px !important;
}

.preview {
    object-fit: cover;
    width: 251px;
    height: 167px;
    border-radius: 8px;
}

.botonModi {
    text-align: center;
    padding-left: 8px !important;
}

.error {
    color: rgb(176, 0, 32);
    font-size: 12px;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    padding-left: 7px;
}

.card {
    border-radius: 12px !important;
}

.title {
    font-size: 24px;
    font-weight: bold;
    color: #262626;
    /* Color de texto de Instagram */
    margin-bottom: 20px;
}
</style>