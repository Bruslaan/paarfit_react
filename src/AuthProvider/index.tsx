import React, {useEffect, useState, createContext} from 'react';
import firebase from '../firebase';

type ContextProps = {
    user: firebase.User | null;
    authenticated: boolean;
    userInformation: any;
    haveInformation: boolean;
    setUser: any;
    loadingAuthState: boolean;
};

interface Userinformation {
    teamname: string;
    stufe: string;
    email: string;
}

export const AuthContext = createContext<Partial<ContextProps>>({});
export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState(null as firebase.User | null);
    const db = firebase.firestore();
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const [userInformation, setuserInformation]: any | null = useState(null);
    useEffect(() => {
        let unsubscribe:any
        firebase.auth().onAuthStateChanged((user: any) => {
            setUser(user);
            setLoadingAuthState(true);

            if (user) {
                unsubscribe = db.collection('users')
                    .doc(user?.uid)
                    .onSnapshot((dataSnapshot) => {
                        dataSnapshot.exists && setuserInformation(dataSnapshot.data());
                        setLoadingAuthState(false);
                    })
            } else {
                setLoadingAuthState(false);
            }
        });
        return unsubscribe;

    }, [db]);
    return (
        <AuthContext.Provider
            value={{
                user,
                authenticated: user !== null,
                setUser,
                userInformation: userInformation,
                haveInformation: userInformation !== null,
                loadingAuthState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
