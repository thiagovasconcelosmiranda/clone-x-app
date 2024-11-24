import React, {createContext, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
}

type UserType = {
    user: any,
    setUser: (newValue: any) => void
}
const initialValue = {
    user: '',
    setUser: () => {}
}

export const UserContext = createContext<UserType>(initialValue);

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<UserType>(initialValue);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}