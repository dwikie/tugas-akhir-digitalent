import { FileSearchOutlined, HomeOutlined } from "@ant-design/icons";
import { useRouteMatch } from "react-router-dom";
import BerandaPetugas from "../components/petugas/beranda";
import DetailPengajuan from "../components/petugas/detail-pengajuan";
import ListPengajuan from "../components/petugas/list-pengajuan";

export default function test() {
  return this;
}

test.prototype.asdasd = 1;

export const DashboardPetugasRoutes = [
  {
    path: `/dashboard`,
    exact: true,
    component: BerandaPetugas,
    sidebarNav: {
      icon: HomeOutlined,
      label: "Beranda",
    },
  },
  {
    path: `/dashboard/pengajuan`,
    exact: true,
    component: ListPengajuan,
    sidebarNav: {
      icon: FileSearchOutlined,
      label: "Daftar Pengajuan",
    },
  },
  {
    path: `/dashboard/pengajuan/:id`,
    exact: true,
    component: DetailPengajuan,
  },
];
