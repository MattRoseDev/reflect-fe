<style src="./style.css" scoped></style>
<template>
  <button :type="type" :class="className" class="">
    <div v-if="loading">Loading ...</div>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ButtonType } from './@types'

export default defineComponent({
  name: "Button",
  props: {
    type: String as () => ButtonType,
    className: String,
    loading: Boolean,
  },
});
</script>
