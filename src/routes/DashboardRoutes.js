import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import BerandaCustomer from "../components/customer/beranda";
import DokumenTambahan from "../components/customer/dokumen-tambahan";
import PengajuanKPR from "../components/customer/pengajuan-kpr/pengajuan-kpr";
import BerandaPetugas from "../components/petugas/beranda";
import DetailPengajuan from "../components/petugas/detail-pengajuan";
import ListPengajuan from "../components/petugas/list-pengajuan";

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
