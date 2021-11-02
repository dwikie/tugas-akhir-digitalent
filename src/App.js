import "./App.css";
import GlobalProvider from "./contexts/GlobalContext";
import { Suspense, lazy } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { BrowserRouter as Router } from "react-router-dom";

const AppRoutes = lazy(() => import("./routers/app.routes"));

export default function App() {
  return (
    <Suspense fallback={<SplashScreen />}>
      <Router>
        <GlobalProvider>
          <AppRoutes />
        </GlobalProvider>
      </Router>
    </Suspense>
  );
}
