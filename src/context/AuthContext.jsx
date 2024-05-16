import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
/**
 * Create a context to manage the auth
 */
export const authContext = createContext();
/**
 * @returns The auth context if exists authContext, otherwise return error
 */
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.error("Error creating auth context");
        return;
    }
    return context;
}
/**
 * @param children 
 * @returns The auth provider with the values userLogged and setUserLogged.
 */
export function AuthProvider({ children }) {
    /**
     * State for the userLogged's values.
     */
    const [userLogged, setUserLogged] = useState(null)

    useEffect(() => {
        const suscribed = onAuthStateChanged(auth, (currentUser) => {
            !currentUser ? setUserLogged(null) : setUserLogged(currentUser)
        })

        return () => suscribed()
    }, [])
    /**
     * 
     * @returns The data of the user logged via Google.
     */
    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(auth, provider);
            return res;
        } catch (error) {
            return error;
        }
    }
    /**
     * 
     * @returns error if the user could not logout, otherwise logout the user via Google.
     */
    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            return error;
        }
    }
    /**
     * Provider for the authContext.
     */
    return (
        <authContext.Provider value={{ userLogged, loginWithGoogle, logout }}>
            {children}
        </authContext.Provider>
    )
}