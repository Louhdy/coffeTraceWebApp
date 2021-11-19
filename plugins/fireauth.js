import { getAuth, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    auth.currentUser.getIdToken(true)
      .then(token => {
        Cookies.set('access_token',token);
      })
  } else {
    Cookies.remove('access_token')
  }
});
