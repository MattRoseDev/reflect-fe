import { MutationTree } from 'vuex'
import type { User } from "@/@types/user";
import { MutationTypes } from './@types'
import type { State } from '../state/@types'
import auth from './auth'

export type Mutations<S = State> = {
  [MutationTypes.SET_USER](state: S, user: User): void;
};

export const mutations: MutationTree<State> & Mutations = {
    ...auth
};
