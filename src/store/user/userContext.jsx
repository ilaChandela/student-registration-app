import { createContext, useState, useContext, useMemo, useCallback } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const addUser = useCallback((user) => {
        setUser(user);
    }, []);

    const removeUser = useCallback(() => {
        setUser(null);
    }, []);

    const value = useMemo(() => ({ user, addUser, removeUser }), [user, addUser, removeUser]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}

export default UserProvider;