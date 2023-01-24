import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"

import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, PiCharizard, PiBlastoise, PiVenusaur, PiPikachu } from "oh-vue-icons/icons";
addIcons(FaFlag, RiZhihuFill, PiCharizard, PiBlastoise, PiVenusaur, PiPikachu);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
