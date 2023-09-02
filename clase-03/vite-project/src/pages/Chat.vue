<script>
import {chatSubscribeToMessages, chatSaveMessage} from "../services/chat.js";

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
    <div>
    <h1>Intro a Firestore</h1>

    <p>Leyendo los mensajes del chat, ahora en tiempo real</p>

    <form
        action="#"
        @submit.prevent="sendMessage"
    >
        <div>
            <label for="user">Usuario</label>
            <input
                type="text"
                id="user"
                v-model="newMessage.user"
            >
        </div>
        <div>
            <label for="message">Mensaje</label>
            <textarea
                id="message"
                v-model="newMessage.message"
            ></textarea>
        </div>
        <button type="submit">Enviar</button>
    </form>

    <div>
        <div v-for="message in messages" :key="message.id">
            <div><b>Usuario:</b> {{ message.user }}</div>
            <div><b>Mensaje:</b> {{ message.message }}</div>
        </div>
    </div>
</div>
</template>
