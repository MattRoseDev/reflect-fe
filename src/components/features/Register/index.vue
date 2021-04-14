<style src="./style.css" scoped></style>
<template>
  <form class="register-container" v-on:submit.prevent="register">
    <Logo />
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
      label="Fullname"
      type="text"
      className="mb-4"
      v-model:value="fullname"
    />
    <Input label="Email" type="text" className="mb-4" v-model:value="email" />
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
      >Register</Button
    >
    <div class="flex justify-center">
      <Link
        to="/login"
        className="inline-flex mb-1 py-1 px-2 font-medium text-indigo-600 hover:bg-indigo-100"
        >Login</Link
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
import { useMutation } from "@vue/apollo-composable";
import { REGISTER } from "@/graphql/auth";
import { appStore } from "@/store";

export default defineComponent({
  name: "RegisterFeature",
  setup() {
    const store = appStore();
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    const {
      error,
      mutate,
      onDone,
      onError,
      loading: loginLoading,
    } = useMutation(REGISTER);

    const loading = ref(false);
    watch(loginLoading, function() {
      loading.value = loginLoading.value;
    });

    const errorMessage = ref("");

    onError(() => {
      errorMessage.value = error.value.message;
    });

    const register = async () => {
      const result = await mutate({
        fullname: fullname.value,
        email: email.value,
        password: password.value,
      });
      if (result.data) {
        const {
          register: { user },
        } = result.data;
        store.commit("SET_USER", user);
        router.push("/");
      }
    };

    return {
      register,
      fullname,
      email,
      password,
      loading,
      store,
      errorMessage,
    };
  },
  components: {
    Input,
    Button,
    Link,
    Logo,
  },
});
</script>
