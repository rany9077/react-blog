import { ReactNode, createContext, useState, useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "firebaseApp"

interface AuthProps {
    children : ReactNode;
}

const AuthContext = createContext<{
    user: User | null;
}>({
    user: null,
})

export const AuthContextProvider = ({ children }: AuthProps) => {
    const auth = getAuth(app)
    const  [currentUser, setCurrentUser] = useState<User | null>(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setCurrentUser(user)
          } else {
            setCurrentUser(user) 
          }
        });
      }, [auth])

      return <AuthContext.Provider value={{ user: currentUser}}>{children}</AuthContext.Provider>
}

export default AuthContext;