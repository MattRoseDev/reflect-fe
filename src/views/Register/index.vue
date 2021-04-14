<style src="./style.css" scoped></style>
<template>
  <div>
    <Register />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Register from "@/components/features/Register/index.vue";
import router from "@/router";
import { appStore } from "@/store";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const store = appStore();
    if (store.state.auth.loggedIn) {
      router.replace("/");
    }
  },
  components: {
    Register,
  },
});
</script>
