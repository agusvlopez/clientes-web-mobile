<script>
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseButton from '../components/BaseButton.vue';
import { login } from '../services/auth.js';

export default {
    name: 'Login',
    components: { BaseButton, BaseLabel, BaseInput },
    emits: ['login'],
    data(){
        return {
            loginLoading: false,
            form: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        doLogin(){
            this.loginLoading = true;

            login({
                // email: this.form.email,
                // password: this.form.password,
                //o directamente copio todo lo que tiene el objeto form, con el spread, de la siguiente forma:
                ...this.form,
            })
            .then(user => {
                // console.log("[Login.vue]User: ", user);
                this.$emit('login', {...user});
            })
            //finally se ejecuta indistintamente si la promesa tuvo exito o fallo
            .finally(() => {
                this.loginLoading = false;
            })
        }
    }
}
</script>

<template>
    <h1 class="mb-4 font-bold text-3xl">Ingresar a mi Cuenta</h1>

    <form 
    action="#"
    @submit.prevent="doLogin"
    >
        <div class="mb-3">
            <BaseLabel for="email">Email</BaseLabel>
            <BaseInput
                type="email" 
                id="email"
                v-model="form.email"
            />
        </div>
        <div class="mb-3">
            <BaseLabel for="password">Contraseña</BaseLabel>
            <BaseInput
                type="password" 
                id="password"
                v-model="form.password"
            />
        </div>
        <BaseButton>Ingresar</BaseButton>
    </form>
</template>