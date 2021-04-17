import { createApp, h, provide } from "vue";
import App from "./app/index.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "./store";
import { defaultClient } from "@/apollo";
import "@/assets/css/tailwind.css";

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
})
  .use(store, key)
  .use(router)
  .mount("#app");
