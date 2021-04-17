<script lang="ts">
import { defineComponent } from "vue";
import router from "@/router";
import { appStore } from "@/store";

export default defineComponent({
  name: "LogoutPage",
  setup() {
    const store = appStore();

    store.commit("SET_USER", { user: null, token: "", loggedIn: false });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/login");
  },
});
</script>
