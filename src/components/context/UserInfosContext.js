import { createContext, useState } from "react";

export const UserInfosContext = createContext({});

export default function UserInfosProvider({ children }) {
  const [userInfos, setUserInfos] = useState({ name: "", score: "" });

  return (
    <UserInfosContext.Provider value={{ userInfos, setUserInfos }}>
      {children}
    </UserInfosContext.Provider>
  )
}


