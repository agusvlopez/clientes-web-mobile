<script>
    export default {
        name: 'BaseButton'
    }

</script>

<template>
    <button 
    class="transition w-full p-1.5 rounded bg-orange-700 text-white hover:bg-orange-600 active:bg-orange-800
    motion-reduce:transition-none"
    type="submit"
    ><slot>Enviar</slot>
    </button>
</template>