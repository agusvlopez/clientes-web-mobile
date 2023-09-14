<script>
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseButton from '../components/baseButton.vue';

export default {
    name: 'Login',
    components: { BaseButton, BaseLabel, BaseInput }
}
</script>

<template>
    <h1 class="mb-4 font-bold text-3xl">Ingresar a mi Cuenta</h1>

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
        <BaseButton>Ingresar</BaseButton>
    </form>
</template>