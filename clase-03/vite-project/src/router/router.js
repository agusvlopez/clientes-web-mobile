//Definimos la lista de rutas

//importo el componente
import Home from './../pages/Home.vue';
import About from './../pages/About.vue';
import Chat from './../pages/Chat.vue';

//Sacamos de la documentacion de vue:
import {createRouter, createWebHashHistory} from 'vue-router';

//array de objetos con cada una de las rutas, como propiedades el path y el componente como minimo
const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/chat', component: Chat},
];

//creamos el router, pasandole las rutas y el administrador de historia de navegacion

const router = createRouter({
    routes,
    history:createWebHashHistory
});

