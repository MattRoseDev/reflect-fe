import type { Auth } from '@/@types/auth'

const token = JSON.parse(localStorage.getItem('token') || 'null')
const user = JSON.parse(localStorage.getItem('user') || 'null')

export const auth: Auth = {
  token, 
  user, 
  loggedIn: token ? true : false,
};
