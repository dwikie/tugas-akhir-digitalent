import React from "react";
import { useHistory } from "react-router";
import {
  IsAuthenticated,
  Authenticate,
  DeAuthenticate,
} from "../configs/authentication";

export const GlobalContext = React.createContext();

export default function GlobalProvider(props) {
  const [account, setAccount] = React.useState(() => IsAuthenticated() || null);
  const { replace } = useHistory();

  const [pageReady, setPageReady] = React.useState(false);
  console.log(account);
  const value = {
    account: [account, setAccount],
    pageReady: [pageReady, setPageReady],
    login: async ({ username, password }) => {
      try {
        const user = await Authenticate({ username, password });
        setAccount(user);
        replace("/");
      } catch (error) {
        throw error;
      }
    },
    logout: () => {
      DeAuthenticate();
      replace("/");
    },
  };

  return <GlobalContext.Provider value={value} {...props} />;
}
