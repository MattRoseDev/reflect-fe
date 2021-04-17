<style src="./style.css" scoped></style>
<template>
  <nav class="px-3 mt-4">
    <div>
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        v-slot="{ isActive }"
        exact
      >
        <div
          :class="[isActive ? 'active' : 'inactive', 'nav']"
          :aria-current="isActive ? 'page' : undefined"
        >
          <component
            :is="item.icon"
            :class="[isActive ? 'activeIcon' : 'inactiveIcon', 'icon']"
            aria-hidden="true"
          />
          {{ item.name }}
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { CogIcon, BellIcon, HomeIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "NavigationComponent",
  components: {
    CogIcon,
    BellIcon,
    HomeIcon,
  },
  setup() {
    const navigation = [
      { name: "Home", to: "/", icon: HomeIcon },
      {
        name: "Notifications",
        to: "/notifications",
        icon: BellIcon,
      },
      { name: "Settings", to: "/settings", icon: CogIcon },
    ];
    return { navigation };
  },
});
</script>
