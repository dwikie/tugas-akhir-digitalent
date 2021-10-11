import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be inside of GlobalContext Provider");
  }
  return context;
}
