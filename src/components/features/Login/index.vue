<style src="./style.css" scoped></style>
<template>
  <form class="login-container" v-on:submit.prevent="login">
    <Logo className="mx-10 mb-10 mt-3 text-center" />
    <div v-if="errorMessage.length > 0" class="rounded-md bg-red-50 p-2.5 mb-3">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-1">
          <h3 class="text-sm text-red-500">
            {{ errorMessage }}
          </h3>
        </div>
      </div>
    </div>
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
    const username = ref("");
    const password = ref("");

    const {
      result,
      error,
      load,
      onResult,
      onError,
      loading: loginLoading,
    } = useLazyQuery(LOGIN);

    const loading = ref(false);
    watch(loginLoading, function() {
      loading.value = loginLoading.value;
    });

    const errorMessage = ref("");

    onError(() => {
      errorMessage.value = error.value.message;
    });

    onResult(() => {
      if (result.value) {
        const {
          login: { user, token },
        } = result.value;
        store.commit("SET_USER", { user, token, loggedIn: true });
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        router.push("/");
      }
    });

    const login = () =>
      load(LOGIN, {
        username: username.value,
        password: password.value,
      });

    return { login, username, password, loading, store, errorMessage };
  },
  components: {
    Input,
    Button,
    Link,
    Logo,
  },
});
</script>
