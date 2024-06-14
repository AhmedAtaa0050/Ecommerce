import { createContext, useContext, useState } from "react";

const UserTokenContext = createContext();

function UserTokenProvider({ children }) {
  const [token, setToken] = useState(function () {
    return localStorage.getItem("userToken") || null;
  });

  return (
    <UserTokenContext.Provider value={{ token, setToken }}>
      {children}
    </UserTokenContext.Provider>
  );
}

function useToken() {
  const context = useContext(UserTokenContext);

  if (context === undefined)
    throw new Error(
      "UseToken must used inside UserTokenProvider.provider component"
    );

  return context;
}

export { UserTokenProvider, useToken };
