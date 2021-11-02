import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import { lazy } from "react";

const BerandaCustomer = lazy(() => import("../containers/Customer/Beranda"));
const KelengkapanDokumen = lazy(() =>
  import("../containers/Customer/KelengkapanDokumen"),
);
const RevisiKelengkapanDokumen = lazy(() =>
  import("../containers/Customer/RevisiKelengkapanDokumen"),
);
const BuatPengajuan = lazy(() =>
  import("../containers/Customer/BuatPengajuan"),
);
const RevisiPengajuanKPR = lazy(() =>
  import("../containers/Customer/RevisiPengajuanKPR/"),
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
    redirect: "/dashboard/pengajuan",
    component: BerandaOfficer,
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
    path: "/dashboard/pengajuan?page=:id",
    exact: true,
    component: DaftarPengajuan,
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
    path: "/dashboard/revisi-pengajuan",
    exact: true,
    component: RevisiPengajuanKPR,
  },
  {
    path: "/dashboard/dokumen-tambahan",
    exact: true,
    component: KelengkapanDokumen,
  },
  {
    path: "/dashboard/revisi-dokumen-tambahan",
    exact: true,
    component: RevisiKelengkapanDokumen,
  },
  {
    path: "/dashboard/*",
    component: NotFound,
  },
];
