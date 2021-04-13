import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import type { State }from "./state/@types";
import { state } from "./state";
import { mutations } from "./mutations";

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
});
