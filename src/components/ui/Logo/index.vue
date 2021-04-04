<style src="./style.css" scoped></style>
<template>
  <router-link to="/" :class="className">
    Reflect
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
  props: {
    className: String,
  },
});
</script>
