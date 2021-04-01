import { createApp, h, provide } from "vue";
import App from "./App.vue";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { API_URL } from "@/common/config";

const defaultClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

createApp({
  setup() {
    provide(DefaultApolloClient, defaultClient);
  },
  render() {
    return h(App);
  },
})
  .use(store)
  .use(router)
  .mount("#app");
