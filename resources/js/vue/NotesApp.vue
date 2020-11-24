<template>
    <div class="wrapp">
        <message></message>
        <ul>
            <li v-for="note in notes">
                {{ note.title }}
                <span @click="deletNote(note.id)">X</span>
            </li>
        </ul>
    </div>
</template>

<script>
import message from './components/NoteApp/Message';

export default {
    components: {
        message
    },
    data() {
        return {
            notes: null,
        }
    },
    methods: {
        deletNote(id) {
            axios.post('api/notes/' + id)
                .then((res) => {

                }).catch((e) => console.log(e));
        }
    },
    mounted() {
        axios.get('api/notes')
            .then((res) => {
                this.notes = res.data;
            }).catch((e) => console.log(e));
    }
}
</script>