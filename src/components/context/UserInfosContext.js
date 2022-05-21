import { createContext, useState } from "react";

export const UserInfosContext = createContext({});

export default function UserInfosProvider({ children }) {
  const [userInfos, setUserInfos] = useState({ user: "", score: 0 });

  return (
    <UserInfosContext.Provider value={{ userInfos, setUserInfos }}>
      {children}
    </UserInfosContext.Provider>
  )
}


