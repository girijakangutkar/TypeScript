import { createContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

// interface AuthContextValue {
//   user: User | null;
// }

export const AuthContextType = createContext<any | null>(null);

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContextType.Provider value={{ user }}>
      {children}
    </AuthContextType.Provider>
  );
};

export default AuthContext;
