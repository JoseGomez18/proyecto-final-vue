// store/index.js
import { createStore } from 'vuex';

const storedFotico = localStorage.getItem('fotico');
export default createStore({
    state: {
        nombre: '',
        validado: false,
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
        },
        actualizarNombre(state, nuevoNombre) {
            console.log('Mutación llamada. Nuevo nombre:', nuevoNombre);
            state.nombre = nuevoNombre
        }
    },
    actions: {

    }
})