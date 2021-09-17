import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { httpAuth } from "../../configs/axios-instances";
import DetailPengajuan from "./detail-pengajuan";
import FormKelengkapanKPR from "./form-kelengkapan-KPR";

export default function DetailPengajuanPetugas(){
    const { params } = useRouteMatch();
    const [dataSource, setDataSource] = React.useState({});
    const [dataPelengkap, setDataPelengkap] = React.useState({});

    useEffect(() => {
        const dispDetailPengajuan = async () => {
          const { data } = await httpAuth
            .get("/pengajuan", {
              params: { id_customer: params.id },
            })
            .then((res) => res.data)
            .catch(function (error) {
              console.log(error);
              return []; // Return empty array in case error response.
            });
    
          console.log(data);
          setDataSource(data);
        };
        const dispKelengkapanKPR = async () => {
          const { data } = await httpAuth
            .get("/list_kelengkapan", {
              params: {},
            })
            .then((res) => res.data)
            .catch(function (error) {
              console.log(error);
              return []; // Return empty array in case error response.
            });
    
          console.log(data);
          setDataPelengkap(data);
        };
        dispKelengkapanKPR();
        dispDetailPengajuan();
      }, [params.id]);

      return (<div>
      <DetailPengajuan></DetailPengajuan>
      <FormKelengkapanKPR></FormKelengkapanKPR></div>)
      
}