import { useEffect, useState } from "react";
import initailizeFirebase from "../componet/Home/Login/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// initializeAuthentication
initailizeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [islogin, setIsloding] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();

  //   login new user
  const register = (email, password, name, navigate) => {
    setIsloding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        // new infomation added to fireabse login system start
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // new infomation added to fireabse login system end

        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);

        // ..
      })
      .finally(() => {
        setIsloding(false);
      });
  };

  //   already singin user again signin method
  const login = (email, password, location, navigate) => {
    setIsloding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsloding(false);
      });
  };
  //   sign out user
  const logOut = () => {
    setIsloding(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setAuthError("");
      })
      .finally(() => {
        setIsloding(false);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsloding(false);
      setAuthError("");
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    register,
    logOut,
    login,
    islogin,
    authError,
  };
};
export default useFirebase;
