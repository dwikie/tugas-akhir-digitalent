import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import { lazy } from "react";

const BerandaCustomer = lazy(() =>
  import("../components/Dashboard/Customer/beranda"),
);
const DokumenTambahan = lazy(() =>
  import("../components/Dashboard/Customer/dokumen-tambahan"),
);
const PengajuanKPR = lazy(() =>
  import("../components/Dashboard/Customer/pengajuan-kpr/pengajuan-kpr"),
);
const BerandaPetugas = lazy(() =>
  import("../components/Dashboard/Petugas/beranda"),
);
const DetailPengajuan = lazy(() =>
  import("../components/Dashboard/Petugas/detail-pengajuan"),
);
const ListPengajuan = lazy(() => import("../layouts/_ListPengajuan"));
const NotFound = lazy(() => import("../pages/404"));

export const DashboardPetugasRoutes = [
  {
    path: "/dashboard",
    exact: true,
    component: BerandaPetugas,
    sidebarNav: {
      icon: HomeOutlined,
      label: "Beranda",
    },
  },
  {
    path: "/dashboard/pengajuan",
    exact: true,
    component: ListPengajuan,
    sidebarNav: {
      icon: FileSearchOutlined,
      label: "Daftar Pengajuan",
    },
  },
  {
    path: "/dashboard/pengajuan/:id",
    exact: true,
    component: DetailPengajuan,
  },
  {
    path: "/dashboard/*",
    component: NotFound,
  },
];

export const DashboardCustomerRoutes = [
  {
    path: "/dashboard",
    exact: true,
    component: BerandaCustomer,
    sidebarNav: {
      icon: HomeOutlined,
      label: "Beranda",
    },
  },
  {
    path: "/dashboard/buat-pengajuan",
    exact: true,
    component: PengajuanKPR,
    sidebarNav: {
      icon: FileSearchOutlined,
      label: "Buat Pengajuan",
    },
  },
  {
    path: "/dashboard/dokumen-tambahan",
    exact: true,
    component: DokumenTambahan,
  },
];
