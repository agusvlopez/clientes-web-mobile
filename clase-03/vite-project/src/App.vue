<script>
import Chat from './pages/Chat.vue';

export default {
    name: "App",
    components: {Chat}
};
</script>


<template>
<div>
    <header class="flex gap-8 items-center p-4 bg-slate-100">
        <div>
            <p class="text-2xl">DV Chat</p>
        </div>
        <nav>
            <ul class="flex gap-4">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/quienes-somos">Quiénes Somos</router-link>
                </li>
                <li>
                    <router-link to="/chat">Chat</router-link>
                </li>
                <li>
                    <router-link to="/registro">Registro</router-link>
                </li>
                <li>
                    <router-link to="/iniciar-sesion">Iniciar Sesión</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <!--
    Acá va a venir el renderizado de las rutas cuando agreguemos Vue Router.
    Mientras tanto, vamos a renderizar la "vista" del Chat.
    -->

    <div class="container m-auto">
        <Chat />
    </div>
</div>
</template>

