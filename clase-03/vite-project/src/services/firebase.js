// En este archivo vamos a definir los servicios de Firebase que vamos a utilizar, y exportarlos para ser
// consumidos por otros servicios.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0Bvj6apWImFckIZxucCIujzqt1_LNvfc",
    authDomain: "cwm-2023-2-noche-v.firebaseapp.com",
    projectId: "cwm-2023-2-noche-v",
    storageBucket: "cwm-2023-2-noche-v.appspot.com",
    messagingSenderId: "1062627041819",
    appId: "1:1062627041819:web:04c68f22156df9f609cebe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore.
export const db = getFirestore(app);
