import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import BerandaCustomer from "../components/Customer/beranda";
import DokumenTambahan from "../components/Customer/dokumen-tambahan";
import PengajuanKPR from "../components/Customer/pengajuan-kpr/pengajuan-kpr";
import BerandaPetugas from "../components/Petugas/beranda";
import DetailPengajuan from "../components/Petugas/detail-pengajuan";
import ListPengajuan from "../components/Petugas/list-pengajuan";

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
