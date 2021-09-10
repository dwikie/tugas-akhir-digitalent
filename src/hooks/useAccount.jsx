import React from "react";
import { AccountContext } from "../context/AccountContext";

export default function useAccount() {
  const context = React.useContext(AccountContext);
  if (!context) {
    throw new Error("useUser must be inside of UserContext Provider");
  }
  return context;
}
