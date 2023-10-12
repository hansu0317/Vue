import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import mitt from 'mitt';

import axios from "axios";
import Mock from "@/mock.js";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";

const app = createApp(App);
const emitter = mitt(); // mitt

//mock
const axiosClient = axios.create({});
Mock.mocked(axiosClient);
app.provide("$axios", axiosClient);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.config.globalProperties.emitter = emitter // mitt

app.mount("#app");
