// Cuando trabajamos con npm, hay que tener cuidado con las rutas que usamos para importar archivos.
// Por defecto, si no usamos una ruta absoluta o relativa indicada con un "./" o "../", npm automáticamente
// supone que cualquier origen (lo que viene después del from) hace referencia a un módulo de npm, instalado
// con "npm install". Es decir, uno que exista en node_modules.
// import { initializeApp } from "firebase/app"; // Esto es un ejemplo de levantar un módulo de npm.
// import {chatSaveMessage, chatSubscribeToMessages} from "./src/services/chat.js";
//
// const salida = document.getElementById('salida');
// const formChat = document.getElementById('form-chat');
// const user = document.getElementById('user');
// const message = document.getElementById('message');
//
// formChat.addEventListener('submit', function(ev) {
//     ev.preventDefault();
//
//     const data = {
//         user: user.value,
//         message: message.value,
//     }
//
//     chatSaveMessage(data)
//         .then(() => {
//             user.value = '';
//             message.value = '';
//         });
// });
//
// // messages = [{user: '', message: ''}]
// chatSubscribeToMessages(messages => {
//     salida.innerHTML = messages.map(message => `<div>
//         <div><b>Usuario: </b> ${message.user}</div>
//         <div><b>Dijo: </b> ${message.message}</div>
//     </div>`).join('');
// });

import './src/main.css';
// Creamos la aplicación de Vue.
import {createApp} from "vue";
import App from "./src/App.vue";
import router from './src/router/router';

const app = createApp(App);

// Agregamos el router al proyecto.
app.use(router);

// Montamos la aplicación en el elemento #app que tenemos en el index.
app.mount('#app');
