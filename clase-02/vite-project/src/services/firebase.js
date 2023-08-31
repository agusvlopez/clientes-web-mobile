// vamos a definir los servicios de firebase que vamos a utilizar
// consumidos por otros servicios

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
     
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtWUxxDxATgkN0nOqoYmKSDxWS3mmEhY8",
    authDomain: "clientes-web-mobile-d7c96.firebaseapp.com",
    projectId: "clientes-web-mobile-d7c96",
    storageBucket: "clientes-web-mobile-d7c96.appspot.com",
    messagingSenderId: "985915244823",
    appId: "1:985915244823:web:468a238ad028d03751b752"
};
     
// los exporto para que lo puedan utilizar otros archivos..

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Obtener la Instancia de Firestore
export const db = getFirestore(app);
