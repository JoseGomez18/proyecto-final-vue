<template>
    <body class="cuerpo">
        <div class="wrapper">
            <div class="title-text">
                <div v-if="selectedTab == 'login'" class="title login">
                    Login
                </div>
                <div v-if="selectedTab == 'signup'" class="title signup">
                    Registro
                </div>
            </div>
            <div class="form-container">
                <div class="slide-controls">
                    <input type="radio" name="slide" id="login" v-model="selectedTab" value="login">
                    <input type="radio" name="slide" id="signup" v-model="selectedTab" value="signup">
                    <label for="login" class="slide login" @click="selectedTab = 'login'">Login</label>
                    <label for="signup" class="slide signup" @click="selectedTab = 'signup'">Registrar</label>
                    <div class="slider-tab"></div>
                </div>
                <div class="form-inner">
                    <form action="" v-if="selectedTab === 'login'" class="login" @submit.prevent="loginSubmit">
                        <div class="field">
                            <input type="email" placeholder="Correo electronico" v-model="correoL" required>
                        </div>
                        <div class="field">
                            <input type="password" placeholder="contraseña" v-model="contraL" required>
                        </div>
                        <div class="pass-link">
                            <a href="">Olvidaste contraseña?</a>
                        </div>
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Iniciar sesión">
                        </div>
                        <h3 id="error">{{ error }}</h3>
                        <div class="signup-link">
                            No es un miembro? <a href="" @click="selectedTab = 'signup'">Registrarse</a>
                        </div>
                    </form>
                    <form action="#" enctype="multipart/form-data" v-else class="signup" @submit.prevent="signupSubmit">
                        <div class="field">
                            <input type="text" placeholder="Nombre" v-model="nombre" required>
                        </div>
                        <div class="field">
                            <input type="email" placeholder="Correo" v-model="correo" required>
                        </div>
                        <div class="field">
                            <input type="password" placeholder="Contraseña" v-model="contra" required>
                        </div>
                        <v-file-input class="field" accept="image/png, image/jpeg, image/bmp"
                            placeholder="Escoge una foto de perfil" prepend-icon=""
                            label="Click y escoge una foto de perfil" @change="handleFileChange"></v-file-input>
                        <!-- <div class="field">
                            <input type="file" placeholder="foto perfil" @change="handleFileChange" required>
                        </div> -->
                        <div class="field btn">
                            <div class="btn-layer"></div>
                            <input type="submit" value="Registrar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</template>
  
<style src="../Css/Registro.css"></style>
  
<script>
import axios from 'axios';

export default {
    name: "RegistroView",
    data() {
        return {
            nombre: "",
            correoL: "",
            contraL: "",
            correo: "",
            contra: "",
            foto: null,
            selectedTab: "login",
            error: ""
        };
    },
    methods: {
        handleFileChange(event) {
            this.foto = event.target.files[0];
        },
        async loginSubmit() {
            const responsee = await axios.post('http://localhost:3000/iniciar-sesion', { correo: this.correoL, contra: this.contraL })

            if (responsee.data.validacion == "true") {

                // actualizar estados
                this.$store.commit('actualizarFotico', `http://localhost:3000${responsee.data.foto}`);
                this.$store.commit('actualizarValidado', responsee.data.validacion);
                this.$store.commit('actualizarNombre', responsee.data.nombre);

                //redireccionar al home
                this.$router.push('/')
            } else {
                this.error = responsee.data.message
                console.log(responsee)
                // reiniciar inputs
                this.correoL = ""
                this.contraL = ""
            }
        },
        async signupSubmit() {
            const formData = new FormData();
            formData.append('nombre', this.nombre);
            formData.append('correo', this.correo);
            formData.append('contra', this.contra);
            formData.append('foto', this.foto);

            const response2 = await axios.post('http://localhost:3000/registrar', formData)
            console.log("Formulario de registro enviado");
            this.selectedTab = 'login'
            return response2
        }
    }
};
</script>
  