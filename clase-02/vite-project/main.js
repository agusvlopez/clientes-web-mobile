       // Import the functions you need from the SDKs you need
       import { initializeApp } from "firebase/app";
       import { getFirestore, collection, onSnapshot, addDoc } from "firebase/firestore";
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
     
       // Initialize Firebase
       const app = initializeApp(firebaseConfig);

       //Obtener la Instancia de Firestore
       const db = getFirestore(app);

       /*
           Leyendo datos de firebase en tiempo real (documentacion -> https://firebase.google.com/docs/firestore/query-data/listen)

           Para hacer esto, primero tenemos que cambiar la funcion getDocs por onSnapshot

           Esta funcion no retorna una promesa sino que recibe un segundo parametro que es un callback con lo que queremos hacer cada vez que haya nueva data
       */
      const refChat = collection(db, 'chats');

       const salida = document.getElementById('salida');
       const formChat = document.getElementById('form-chat');
       const user = document.getElementById('user');
       const message = document.getElementById('message');

       formChat.addEventListener('submit', function(e){
           e.preventDefault();
           const data = {
               user: user.value,
               message: message.value,
           }
       // Grabamos los datos en una collection:
       // solo necesitamos llamar a la funcion pasandole 2 cosas: 
       //1. La referencia de la collection donde quiero insertar el documento.
       //2. Un objeto con los datos a insertar
       //La funcion retorna una ppromeso que se completa cuando el documento se grabo correctamente.

       addDoc(refChat, data)
           .then(()=> {
               //para que los campos del formulario queden vacios una vez que se envia
               user.value = '';
               message.value = '';
           })
       });


       onSnapshot(refChat, snapshot => {
               
               salida.innerHTML = "";   

               salida.innerHTML = snapshot.docs.map(doc => `
                       <div>
                           <div><p><strong>Usuario:</strong> ${doc.data().user}</p></div>
                           <div><p><strong>Dijo:</strong> ${doc.data().message}</p></div>
                       <div>`).join('');
           });    