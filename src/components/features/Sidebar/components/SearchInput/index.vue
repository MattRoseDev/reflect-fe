<style src="./style.css" scoped></style>
<template>
  <div class="px-3 mt-5">
    <label for="search" class="sr-only">Search</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        aria-hidden="true"
      >
        <SearchIcon class="icon" aria-hidden="true" />
      </div>
      <input
        type="text"
        name="search"
        id="search"
        class="input"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "SearchInputComponent",
  components: {
    SearchIcon,
  },
});
</script>
