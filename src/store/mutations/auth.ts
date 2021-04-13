import type { User } from "@/@types/user";
import { MutationTypes } from './@types'
import type { State } from '../state/@types'

export default  {
  [MutationTypes.SET_USER](state: State, user: User) {
    state.auth = {
      user,
      loggedIn: true,
    };
  },
};
