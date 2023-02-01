import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueApexCharts from "vue3-apexcharts";
const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);
app.use(vuetify).use(VueApexCharts).mount("#app");
