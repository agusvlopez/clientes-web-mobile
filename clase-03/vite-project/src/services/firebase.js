// En este archivo vamos a definir los servicios de Firebase que vamos a utilizar, y exportarlos para ser
// consumidos por otros servicios.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtWUxxDxATgkN0nOqoYmKSDxWS3mmEhY8",
    authDomain: "clientes-web-mobile-d7c96.firebaseapp.com",
    projectId: "clientes-web-mobile-d7c96",
    storageBucket: "clientes-web-mobile-d7c96.appspot.com",
    messagingSenderId: "985915244823",
    appId: "1:985915244823:web:468a238ad028d03751b752"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore.
export const db = getFirestore(app);

//Obtener la instancia de Authentication
export const auth = getAuth(app);