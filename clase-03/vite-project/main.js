
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
