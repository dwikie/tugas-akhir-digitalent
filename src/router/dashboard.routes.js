import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import { lazy } from "react";

const BerandaCustomer = lazy(() => import("../containers/Customer/Beranda"));
const KelengkapanDokumen = lazy(() =>
  import("../containers/Customer/KelengkapanDokumen"),
);
const BuatPengajuan = lazy(() =>
  import("../containers/Customer/BuatPengajuan"),
);
const BerandaOfficer = lazy(() => import("../containers/Officer/Beranda"));
const DetailPengajuan = lazy(() =>
  import("../containers/Officer/DetailPengajuan"),
);
const DaftarPengajuan = lazy(() =>
  import("../containers/Officer/DaftarPengajuan"),
);
const NotFound = lazy(() => import("../pages/404"));

export const DashboardPetugasRoutes = [
  {
    path: "/dashboard",
    exact: true,
    component: BerandaOfficer,
    sidebarNav: {
      icon: HomeOutlined,
      label: "Beranda",
    },
  },
  {
    path: "/dashboard/pengajuan",
    exact: true,
    component: DaftarPengajuan,
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
    component: BuatPengajuan,
    sidebarNav: {
      icon: FileSearchOutlined,
      label: "Buat Pengajuan",
    },
  },
  {
    path: "/dashboard/dokumen-tambahan",
    exact: true,
    component: KelengkapanDokumen,
  },
  {
    path: "/dashboard/*",
    component: NotFound,
  },
];
