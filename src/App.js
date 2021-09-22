import "./App.css";
import AccountProvider from "./context/AccountContext";
import AppRoutes from "./routes/app.routes";

export default function App() {
  return (
    <AccountProvider>
      <AppRoutes />
    </AccountProvider>
  );
}
