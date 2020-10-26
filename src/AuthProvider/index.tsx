import React, { useEffect, useState, createContext } from "react";
import firebase from "../firebase";
type ContextProps = {
  user: firebase.User | null;
  authenticated: boolean;
  userInformation: any;
  haveInformation: boolean;
  setUser: any;
  loadingAuthState: boolean;
};
export const AuthContext = createContext<Partial<ContextProps>>({});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null as firebase.User | null);
  const db = firebase.firestore()
  const [loadingAuthState, setLoadingAuthState] = useState(true);
  const [userInformation, setuserInformation]: any | null = useState(null)
  useEffect(() => {

    firebase.auth().onAuthStateChanged((user: any) => {
      setUser(user);


      db.collection("users").doc(user?.uid).get().then(document => {

        document.exists && setuserInformation(document.data())

        setLoadingAuthState(false);
      })

    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        authenticated: user !== null,
        setUser,
        userInformation: userInformation,
        haveInformation: userInformation !== null,
        loadingAuthState
      }}>
      {children}
    </AuthContext.Provider>
  );
}