import React from "react";
import { useHistory } from "react-router";
import { DeAuthenticate, IsAuthenticated } from "../configs/authentication";

export const DashboardContext = React.createContext();

export default function DashboardProvider(props) {
  const { replace } = useHistory();
  const [isSidebarVisible, setIsSidebarVisible] = React.useState({
    isVisible: true,
  });
  const [pageReady, setPageReady] = React.useState(false);

  function removeAuth() {
    DeAuthenticate();
    replace("/logout");
  }

  const returnValue = {
    isSidebarVisible: [isSidebarVisible, setIsSidebarVisible],
    pageReady: [pageReady, setPageReady],
    validateAuth: IsAuthenticated,
    logout: removeAuth,
  };

  return <DashboardContext.Provider value={returnValue} {...props} />;
}
