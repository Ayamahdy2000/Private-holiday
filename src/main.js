import {
    createApp
} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import bootstrap from 'bootstrap'
import 'v-calendar/dist/style.css';
import VueLazyLoad from 'vue3-lazyload'
const app = createApp({})
app.use(bootstrap)
app.use(VueLazyLoad, {


})
app.mount('#app')
createApp(App).mount('#app')