<script>
    export default {
        name: 'BaseInput',

        props: ['modelValue'],
        emits: ['update:modelValue']
    }

</script>

<template>
    <input
    class="w-full px-1.5 py-1 border border-gray-400 rounded"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"

    >   
</template>