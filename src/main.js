import {
    createApp
} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from 'bootstrap'
import 'v-calendar/dist/style.css';

const app = createApp({})
app.use(bootstrap)

createApp(App).mount('#app')