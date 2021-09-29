import "./App.css";
import GlobalProvider from "./context/GlobalContext";
import { Suspense, lazy } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { BrowserRouter as Router } from "react-router-dom";

const AppRoutes = lazy(() => import("./routes/app.routes"));

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
