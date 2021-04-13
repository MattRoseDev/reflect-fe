<style src="./style.css" scoped></style>
<template>
  <form class="login-container" v-on:submit.prevent="login">
    <Logo />
    <Input
      label="Username"
      type="text"
      className="mb-4"
      v-model:value="username"
    />
    <Input
      label="Password"
      type="password"
      className="mb-4"
      v-model:value="password"
    />
    <Button
      type="submit"
      className="text-white bg-indigo-600 hover:bg-indigo-700 my-3"
      :loading="loading"
      >Login</Button
    >
    <div class="flex justify-center">
      <Link
        to="/register"
        className="inline-flex mb-1 py-1 px-2 font-medium text-indigo-600 hover:bg-indigo-100"
        >Register Now</Link
      >
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import router from "@/router";
import Input from "@/components/ui/Input/index.vue";
import Button from "@/components/ui/Button/index.vue";
import Link from "@/components/ui/Link/index.vue";
import Logo from "@/components/ui/Logo/index.vue";
import { useLazyQuery } from "@vue/apollo-composable";
import { LOGIN } from "@/graphql/auth";
import { appStore } from "@/store";

export default defineComponent({
  name: "LoginFeature",
  setup() {
    const store = appStore();
    const username = ref("favecode");
    const password = ref("12345678");

    const {
      result,
      load,
      onResult,
      onError,
      loading: loginLoading,
    } = useLazyQuery(LOGIN);

    const loading = ref(false);
    watch(loginLoading, function() {
      loading.value = loginLoading.value;
    });

    onResult(() => {
      const {
        login: { user },
      } = result.value;
      store.commit("SET_USER", user);
      router.push("/");
    });

    onError(() => {
      // Error
    });

    const login = () =>
      load(LOGIN, {
        username: username.value,
        password: password.value,
      });

    return { login, username, password, loading, store };
  },
  components: {
    Input,
    Button,
    Link,
    Logo,
  },
});
</script>
