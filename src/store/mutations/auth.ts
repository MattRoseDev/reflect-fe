import type { Auth } from "@/@types/auth";
import { MutationTypes } from './@types'
import type { State } from '../state/@types'

export default  {
  [MutationTypes.SET_USER](state: State, auth: Auth) {
    state.auth = auth
   },
};
