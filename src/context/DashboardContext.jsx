import React from "react";
import { useHistory } from "react-router";
import { DeAuthenticate, IsAuthenticated } from "../configs/authenticate";

export const DashboardContext = React.createContext();

export default function DashboardProvider(props) {
  const { replace } = useHistory();
  const [sidebar, setSidebar] = React.useState({ isCollapsed: true });

  function removeAuth() {
    DeAuthenticate();
    replace("/logout");
  }

  const returnValue = {
    sidebar: sidebar,
    setSidebar: setSidebar,
    logout: removeAuth,
    validateAuth: IsAuthenticated,
  };

  return <DashboardContext.Provider value={returnValue} {...props} />;
}
