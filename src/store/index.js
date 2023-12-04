// store/index.js
import { createStore } from 'vuex';

const storedFotico = localStorage.getItem('fotico');
const storedValidado = localStorage.getItem('validado');
const storedNombre = localStorage.getItem('nombre');
const storedCorreo = localStorage.getItem('correo');

export default createStore({
    state: {
        nombre: storedNombre || '',
        correo: storedCorreo || '',
        validado: storedValidado || false,
        fotico: storedFotico || ''
    },
    getters: {
        obtenerFotico(state) {
            return state.fotico
        },
        obtenerValidacion(state) {
            return state.validado
        },
        obtenerNombre(state) {
            return state.nombre
        },
        obtenerCorreo(state) {
            return state.correo
        }
    },
    mutations: {
        actualizarFotico(state, nuevoFotico) {
            state.fotico = nuevoFotico;
            localStorage.setItem('fotico', nuevoFotico);
        },
        actualizarValidado(state, nuevoValidado) {
            state.validado = nuevoValidado
            localStorage.setItem('validado', nuevoValidado);
        },
        actualizarNombre(state, nuevoNombre) {
            localStorage.setItem('nombre', nuevoNombre);
            state.nombre = nuevoNombre
        },
        actualizarCorreo(state, nuevoCorreo) {
            localStorage.setItem('correo', nuevoCorreo);
            state.correo = nuevoCorreo
        }
    },
    actions: {

    }
})