<style src="./style.css" scoped></style>
<template>
  <div class="app-container">
    <Sidebar v-if="store.state.auth.loggedIn" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "@/components/features/Sidebar/index.vue";
import { appStore } from "@/store";

export default defineComponent({
  name: "App",
  setup() {
    const store = appStore();
    return { store };
  },
  components: {
    Sidebar,
  },
});
</script>
