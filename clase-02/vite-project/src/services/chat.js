// Las funciones que sirven para interactuar con el chat.
import {db} from './firebase.js';
import {addDoc, collection, onSnapshot} from "firebase/firestore";

const refChat = collection(db, 'chats');

export function chatSaveMessage(data) {
    return addDoc(refChat, data);
};

export function chatSubscribeToMessages(callback) {
    /*
 |--------------------------------------------------------------------------
 | Leyendo datos de Firestore en tiempo real
 |--------------------------------------------------------------------------
 | Si queremos leer los datos en tiempo real, es decir, que se actualicen automáticamente tan pronto
 | haya datos nuevos en el servidor, es bastante sencillo.
 | Tenemos que primero, cambiar la función que usamos. En vez de "getDocs" vamos a usar "onSnapshot".
 | Esta función no retorna una promesa, sino que recibe un segundo parámetro que es un "callback"
 | con lo que queremos hacer cada vez que haya nueva data.
 */
    onSnapshot(refChat, snapshot => {
        // Transformamos el snapshot a un array de objetos que tengan solo los datos de cada mensaje.
        const data = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                message: doc.data().message,
            };
        });

        // Invocamos el callback recibido por parámetro con el array de objetos creado.
        callback(data);
    });
};
