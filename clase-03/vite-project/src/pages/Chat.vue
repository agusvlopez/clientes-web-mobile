<script>
import {chatSubscribeToMessages, chatSaveMessage} from "../services/chat.js";

// TODO: Ordenar los mensajes del chat :)

export default {
    name: "Chat",
    data() {
        return {
            messages: [],
            newMessage: {
                user: '',
                message: '',
            }
        }
    },

    methods: {
        sendMessage() {
            chatSaveMessage({
                user: this.newMessage.user,
                message: this.newMessage.message,
                // ...this.newMessage // Podríamos haberlo escrito así, también.
            })
                .then(() => {
                    this.newMessage.message = '';
                });
        }
    },

    mounted() {
        chatSubscribeToMessages(messages => {
            this.messages = messages;
        });
    }
};
</script>

<template>
    <h1 class="mb-4 font-bold text-3xl">Intro a Firestore</h1>

    <p class="mb-3">Leyendo los mensajes del chat, ahora en tiempo real</p>

    <div class="flex justify-between gap-4">
        <div >
            <div 
                v-for="message in messages"
                class="mb-2"
            >
                <div><b>Usuario:</b> {{ message.user }}</div>
                <div><b>Mensaje:</b> {{ message.message }}</div>
            </div>
        </div>

        <form
            action="#"
            @submit.prevent="sendMessage"
        >
            <div class="mb-3">
                <label for="user" class="block mb-1 font-bold">Usuario</label>
                <input
                    class="w-full px-1.5 py-1 border border-gray-400 rounded"
                    type="text"
                    id="user"
                    v-model="newMessage.user"
                >
            </div>
            <div class="mb-3">
                <label for="message" class="block mb-1 font-bold">Mensaje</label>
                <textarea
                    class="w-full px-1.5 py-1 border border-gray-400 rounded"
                    id="message"
                    v-model="newMessage.message"
                ></textarea>
            </div>
            <button 
                class="w-full p-1.5 rounded bg-orange-700 text-white"
                type="submit"
            >Enviar</button>
        </form>
    </div>
</template>
