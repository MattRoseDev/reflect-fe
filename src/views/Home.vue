<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/layout/Header.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
  },
});
</script>
