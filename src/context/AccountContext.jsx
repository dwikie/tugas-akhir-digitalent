import React from "react";
import { IsAuthenticated } from "../configs/authenticate";

export const AccountContext = React.createContext();

export default function AccountProvider(props) {
  const [account, setAccount] = React.useState(
    () => IsAuthenticated() || { isLoggedIn: false },
  );
  return <AccountContext.Provider value={[account, setAccount]} {...props} />;
}
