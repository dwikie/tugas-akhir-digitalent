import React from "react";
import { message } from "antd";
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
    message: (text, type, duration = 3) => {
      // Type: error, loading, success, warning, info
      message.open({
        content: text,
        type: type,
        duration: duration,
      });
    },
  };

  return <GlobalContext.Provider value={value} {...props} />;
}
