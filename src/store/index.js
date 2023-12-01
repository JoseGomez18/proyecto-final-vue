// store/index.js
import { createStore } from 'vuex';

const storedFotico = localStorage.getItem('fotico');
const storedValidado = localStorage.getItem('validado');
const storedNombre = localStorage.getItem('nombre');
export default createStore({
    state: {
        nombre: storedNombre || '',
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
            console.log('Getter obtenerNombre:', state.nombre);
            return state.nombre
        }
    },
    mutations: {
        actualizarFotico(state, nuevoFotico) {
            console.log('Mutación llamada. Nuevo fotico:', nuevoFotico);
            state.fotico = nuevoFotico;
            console.log(state.fotico)
            localStorage.setItem('fotico', nuevoFotico);
        },
        actualizarValidado(state, nuevoValidado) {
            state.validado = nuevoValidado
            localStorage.setItem('validado', nuevoValidado);
        },
        actualizarNombre(state, nuevoNombre) {
            console.log('Mutación llamada. Nuevo nombre:', nuevoNombre);
            localStorage.setItem('nombre', nuevoNombre);
            state.nombre = nuevoNombre
        }
    },
    actions: {

    }
})