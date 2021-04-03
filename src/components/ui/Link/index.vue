<style src="./style.css" scoped></style>
<template>
  <router-link class="link" :to="to" :class="className">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import type { ButtonType } from './@types'

export default defineComponent({
  name: "Link",
  props: {
    to: String, //as () => ButtonType,
    className: String,
  },
});
</script>
