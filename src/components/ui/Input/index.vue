<style src="./style.css" scoped></style>
<template>
  <div class="input-container" :class="className">
    <input :type="type" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { InputType } from './@types/index'

export default defineComponent({
  name: "Input",
  props: {
    type: String as () => InputType,
    placeholder: String,
    className: String
  },
});
</script>
