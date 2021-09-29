import React from "react";
import { useHistory } from "react-router";
import {
  IsAuthenticated,
  Authenticate,
  DeAuthenticate,
} from "../configs/authentication";

export const GlobalContext = React.createContext();

export default function GlobalProvider(props) {
  const [account, setAccount] = React.useState(
    () => IsAuthenticated() || { isLoggedIn: false },
  );
  const { replace } = useHistory();

  const [pageReady, setPageReady] = React.useState(false);
  const value = {
    account: [account, setAccount],
    pageReady: [pageReady, setPageReady],
    login: Authenticate,
    logout: () => {
      DeAuthenticate();
      replace("/");
    },
  };

  return <GlobalContext.Provider value={value} {...props} />;
}
