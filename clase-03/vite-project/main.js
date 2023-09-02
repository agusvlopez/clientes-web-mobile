// Creamos la aplicación de Vue.
import './src/main.css';
import {createApp} from "vue";
import App from "./src/App.vue";

const app = createApp(App);

// Montamos la aplicación en el elemento #app que tenemos en el index.
app.mount('#app');