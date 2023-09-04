// Vamos a definir los detalles de nuestro Router de Vue.
import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import Chat from './../pages/Chat.vue';
import Register from './../pages/Register.vue';
import Login from './../pages/Login.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Primero definimos la lista de rutas.
const routes = [
    { path: '/',                component: Home },
    { path: '/quienes-somos',   component: About },
    { path: '/chat',            component: Chat },
    { path: '/registro',        component: Register },
    { path: '/iniciar-sesion',  component: Login },
];

// Creamos el router, pasándole las rutas y el administrador de historia de navegación.
const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;