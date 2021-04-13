<style src="./style.css" scoped></style>
<template>
  <div>
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "@/components/features/Login/index.vue";
import router from "@/router";
import { appStore } from "@/store";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const store = appStore();
    if (store.state.auth.loggedIn) {
      router.replace("/");
    }
  },
  components: {
    Login,
  },
});
</script>
