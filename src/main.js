// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import VueGoogleMaps from "vue3-google-map";
import store from "./store.js"
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    key: "AIzaSyDNhn5qcitFbev-MubnJoQkdGwNTifkjzw",
    libraries: "places",
    region: "KR"
  })
  .use(store)
  .mount("#app");
