// Funciones que sirven para interactuar con el chat.
import { dateToString } from '../helpers/date.js';
import {db} from './firebase.js';
import {addDoc, collection, onSnapshot, serverTimestamp, query, orderBy} from "firebase/firestore";

const refChat = collection(db, 'chats');

export function chatSaveMessage(data) {
    /*
     |--------------------------------------------------------------------------
     | Grabando datos
     |--------------------------------------------------------------------------
     | Para grabar datos en una collection, solo necesitamos llamar a la función addDoc, pasándole
     | 2 cosas:
     | 1. La referencia de la collection donde quiero insertar el documento.
     | 2. Un objeto con los datos a insertar.
     | La función retorna una promesa que se completa cuando el documento se grabó correctamente.
     */
    return addDoc(refChat, {
        ...data,
         //serverTimestamp() le pide a firebase que use la fecha y hora del servidor al momento de almacenar los datos
        created_at:  serverTimestamp(),
    });
}
/**
 * 
 * @param {() => {}} callback 
 * @returns {import("firebase/auth").Unsubscribe}
 */
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
    
    //Ahora queremos traer los mensajes del chat en orden por fecha de creación
    //Para hacer esto necesitamos crear un query:
    //Los queries se crean con la funcion "query()" de firestore y necesita al menos 2 parametros:
    //1. Una referencia de una collection, que es a la que queremos aplicar el filtro
    //2. El filtro que queremos aplicar 

    //Puede recibir mas de un filtro, pero si o si siempre tiene que haber al menos uno.

    //si queremos ordenar usamos la funcion orderBy() que recibe como argumento el nombre del campo que usamos de referencia para ordenar
    //Por defecto, el orden es ascendente. SI queremos cambiarlo lo pdemos hacer pasandole 'desc' como segundo parametro

    //Una vez armado el query, lo opdemos usar con cualquiera de las funciones de firebase que aceptan una referencia de una collection, como onSnapshot(lo hacemos abajo)
    //Entonces lo que hacemos es una consulta al chat ordenado por la fecha y hora de creacion en orden ascendente:
    const q = query(refChat, orderBy("created_at"));


   return onSnapshot(q, snapshot => {
        // Transformamos el snapshot a un array de objetos que tengan solo los datos de cada mensaje.
        const data = snapshot.docs.map(doc => {
            return {
                id: doc.id, //su identificador
                user: doc.data().user,
                message: doc.data().message,
                created_at: doc.data().created_at.toDate(),
            };
        });

        // Invocamos el callback recibido por parámetro con el array de objetos creado.
        callback(data);
    });
}
