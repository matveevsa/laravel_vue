import Home from './pages/Home.vue';
import NoteApp from './pages/NoteApp.vue';

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/note-app',
            component: NoteApp
        }
    ]
}