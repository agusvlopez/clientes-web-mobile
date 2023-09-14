<script>
import BaseButton from '../components/baseButton.vue';

export default {
    name: 'Register',
    components: { BaseButton }
}
</script>

<template>
    <h1 class="mb-4 font-bold text-3xl">Crear Cuenta en DV Chat</h1>

    <form action="#">
        <div class="mb-3">
            <label for="email" class="block mb-1 font-bold">Email</label>
            <input
                class="w-full px-1.5 py-1 border border-gray-400 rounded"
                type="email" 
                id="email"
            >
        </div>
        <div class="mb-3">
            <label for="password" class="block mb-1 font-bold">Contraseña</label>
            <input
                class="w-full px-1.5 py-1 border border-gray-400 rounded"
                type="password" 
                id="password"
            >
        </div>
       <BaseButton>Crear Cuenta</BaseButton>
    </form>
</template>