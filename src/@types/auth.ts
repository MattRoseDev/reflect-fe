import type { User } from './user'

export type Auth = {
  token: string;
  user?: User;
  loggedIn: boolean;
};
