<template>
  <div class="hidden lg:flex lg:items-start lg:py-5 h-full">
    <div class="flex flex-col w-72 shadow bg-white rounded-lg top-0 sticky">
      <div
        class="flex items-center px-5 py-4 font-bold border-b boder-gray-900"
      >
        REFLECT
      </div>

      <div class="h-0 flex-1 flex flex-col overflow-y-auto pt-5 pb-2">
        <div>
          <span class="flex w-full justify-between items-center px-4 ">
            <span class="flex min-w-0 items-center justify-between space-x-3">
              <Avatar />
              <span class="flex-1 flex flex-col min-w-0">
                <span class="text-gray-900 text-sm font-medium truncate">{{
                  store.state.auth.user.fullname
                }}</span>
                <span class="text-gray-500 text-sm truncate"
                  >@{{ store.state.auth.user.username }}</span
                >
              </span>
            </span>
          </span>
        </div>
        <SearchInput />
        <Navigation />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Avatar from "@/components/ui/Avatar/index.vue";
import Navigation from "./components/Navigation/index.vue";
import SearchInput from "./components/SearchInput/index.vue";
import { appStore } from "@/store";

export default defineComponent({
  name: "SidebarFeature",
  components: {
    SearchInput,
    Avatar,
    Navigation,
  },
  setup() {
    const store = appStore();

    return { store };
  },
});
</script>
