import { getAuth } from "firebase/auth";
import {getUserFromCookie} from "~/helpers";

export default function ({route, app, store, redirect, req}){
  if (process.server) {
    const user = getUserFromCookie(req);
    if (!user) {
      redirect('/auth/signin');
    } else {
      store.commit('setUser', user);
    }
  } else {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
      redirect('auth/signin');
    }
  }
}

