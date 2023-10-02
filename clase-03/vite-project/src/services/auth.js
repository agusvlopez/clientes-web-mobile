/*
    Este archivo va a contener los métodos para interactuar con la autenticación,asi como funcionar como unica fuente de verdad(single source of truth) de los detalles de la autenticación

    Para manejar los datos del estado de autenticacion, va a guardarlos en variables, y va a ofrecer una interfaz de un "Observer" para poder pedir esa informacion en teiempo real. Es decir, que puedan ser notificados instantaneamente cuando ocurra algun cambio. 

    ¿Que es un observer?
    Observer es un patrón de diseño.
    Este patrón sirve cuando tenemos un dato que puede cambiar con el tiempo, y existen muchos otros lugares(ej: funciones, clases, componentes. etc) que necesitan enterarse de esos cambios en el momento.
    Funciona definiendo un "Subject" (sujeto), que es la data que queremos "observar" para enterarnos de sus cambios.
    Ese sujeto va a permitir asociar uno o más "Observers"(observadores), que son los interesados en saber los cambios. Estos observers pueden ser calses o funciones, dependiendo el lenguaje. En js suelen ser funciones.

    El sujero luego es el encargado de llevar una lista de los observadores, y de notificarles cuando ocurre algún cambio. (Generalmente lo hace con un bucle)
    El proceso de agregar un observador se suele llamar, en algunos casos "listen" o "suscribe". Por ejemplo, en js el addEventListener() es un observer.



*/
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.js';

let userData = {
    id: null,
    email: null,
}

let observers = [];

//Si el usuario figuraba como autenticado, lo marcamos como tal inmediatamente.
if(localStorage.getItem('user')){
    userData = JSON.parse(localStorage.getItem('user'));
};

onAuthStateChanged(auth, user => {
    if(user){
        setUserData({
            id: user.uid,
            email: user.email,
        });
        localStorage.setItem('user', JSON.stringify(userData))
    }else {
        clearUserData();
        localStorage.removeItem('user');
    }
})
/**
 * Inicia sesión
 * 
 * @param {{email: string, password: string}} user 
 * @return {Promise}
 */
export function login({email, password}){
    return signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        // console.log("[auth.js login]Sesion iniciada, las credenciales son: ", userCredentials);

        // userData = {
        //     id: userCredentials.user.uid,
        //     email: userCredentials.user.email,
        // };

        // //Notificamos a todos los observadores.
        // notifyAll();
        
        // setUserData({
        //     id: userCredentials.user.uid,
        //     email: userCredentials.user.email,
        // });
        return {...userData}
    })
    .catch(error => {
        return {
            code: error.code,
            message: error.message,
        }
    })
}
/**
 * 
 * @returns {Promise}
 */
export function logout()
{
    // const promise = signOut(auth);
    // clearUserData();
    // userData = {
    //     id: null,
    //     email: null,
    // };
    // notifyAll();

    return signOut(auth);
}


/**
 * Agrega un observer(callback) para ser notificado de los cambios en el estado de autenticación.
 * El observer debe ser una función que reciba como argumento un objeto y no retorne nada o no importa que retorne.
 * 
 * @param {(id: null|string, email: null|string) => {void}} callback 
 * @returns {() => void} Función para cancelar la suscripción.
 */
export function subscribeToAuth(observer){
    //Agregamos el observer a la lista.
    observers.push(observer);

    console.log("Observer agregado, el total de observers es de: ", observers);

    //Ejecutamos el observer inmediatamente con la data actual.
    notify(observer);

    return () => {

        observers = observers.filter(obs => obs !== observer);
        console.log("Observer removido, el total de observers es de: ", observers);
    }
}

/**
 * Notifica a un observador de los datos.
 * 
 * @param {() => {}} observer
 */
function notify(observer)
{
    observer({...userData});
}

/**
 * Notifica a todos los observers de los datos de la autenticación.
 */
function notifyAll() 
{
    observers.forEach(observer => notify(observer));
}

/**
 * 
 * @param {{id: null|string, email: null|string}} newData 
 */
function setUserData(newData)
{
    userData = {
        ...userData,
        ...newData,
    }
    notifyAll()
}

function clearUserData()
{
    setUserData({
        id: null,
        email: null,
    });
}