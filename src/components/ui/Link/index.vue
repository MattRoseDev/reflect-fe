<style src="./style.css" scoped></style>
<template>
  <div>
    <button :type="type" :class="className">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import type { ButtonType } from './@types'

export default defineComponent({
  name: "Button",
  props: {
    type: String, //as () => ButtonType,
    className: String,
  },
});
</script>
