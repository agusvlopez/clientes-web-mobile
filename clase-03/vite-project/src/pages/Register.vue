<script>
import BaseLabel from '../components/BaseLabel.vue';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';

export default {
    name: 'Register',
    components: { BaseButton, BaseLabel, BaseInput }
}
</script>

<template>
    <h1 class="mb-4 font-bold text-3xl">Crear Cuenta en DV Chat</h1>

    <form action="#">
        <div class="mb-3">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput
                type="email" 
                id="email"
            />
        </div>
        <div class="mb-3">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <BaseInput
                type="password" 
                id="password"
            />
        </div>
       <BaseButton>Crear Cuenta</BaseButton>
    </form>
</template>