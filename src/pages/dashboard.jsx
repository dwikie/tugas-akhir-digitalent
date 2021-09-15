import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import BerandaCustomer from "../components/customer/beranda";
import DokumenTambahan from "../components/customer/dokumen-tambahan";
import PengajuanKPR from "../components/customer/pengajuan-kpr/pengajuan-kpr";
import DashboardContainer from "../containers/DashboardContainer";
import DashboardProvider from "../context/DashboardContext";
import useAccount from "../hooks/useAccount";
import xx, { DashboardPetugasRoutes } from "../routes/DashboardRoutes.js";

export default function Dashboard() {
  const [account] = useAccount();
  const { url } = useRouteMatch();
  console.log(<xx />);

  const DashboardCustomerRoutes = [
    {
      path: `${url}`,
      exact: true,
      component: BerandaCustomer,
      sidebarNav: {
        icon: HomeOutlined,
        label: "Beranda",
      },
    },
    {
      path: `${url}/buat-pengajuan`,
      exact: true,
      component: PengajuanKPR,
      sidebarNav: {
        icon: FileSearchOutlined,
        label: "Buat Pengajuan",
      },
    },
    {
      path: `${url}/dokumen-tambahan`,
      exact: true,
      component: DokumenTambahan,
    },
  ];

  return (
    <DashboardProvider>
      <Router>
        <Route
          path={url}
          render={() =>
            account.isPetugas ? (
              <DashboardContainer routes={DashboardPetugasRoutes} />
            ) : (
              <DashboardContainer routes={DashboardCustomerRoutes} />
            )
          }
        />
      </Router>
    </DashboardProvider>
  );
}
