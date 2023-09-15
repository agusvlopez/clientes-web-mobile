<script>
import Loader from './Loader.vue';

    export default {
    name: 'BaseButton',
    props: {
        loading: {
            type: Boolean,
            default: false,
        }
    },
    components: { Loader }
}

</script>

<template>
    <button 
    class="transition w-full p-1.5 rounded bg-orange-700 text-white hover:bg-orange-600 active:bg-orange-800
    motion-reduce:transition-none disabled:bg-orange-400"
    type="submit"
    :disabled="loading"
    >
    <div v-if="!loading">
        <slot>Enviar</slot>
    </div>
    <div v-else>
        <Loader></Loader>
    </div>
    </button>
</template>