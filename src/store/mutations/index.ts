import { MutationTree } from 'vuex'
import type { Auth } from "@/@types/auth";
import { MutationTypes } from './@types'
import type { State } from '../state/@types'
import auth from './auth'

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, auth: Auth): void;
};

export const mutations: MutationTree<State> & Mutations = {
    ...auth
};
