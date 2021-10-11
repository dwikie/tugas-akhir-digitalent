import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import ReportDaftarPengajuan from "../ReportDaftarPengajuan";

export default function ModalDaftarPengajuan({ modalVisibility, hideModal }) {
  const [innerWidth, setInnerWIdth] = useState(window.innerWidth);
  const [innerHeight, setinnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    function onWindowResize() {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setInnerWIdth(newWidth);
      setinnerHeight(newHeight);
    }

    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return (
    <Modal
      destroyOnClose={true}
      title="Daftar Pengajuan"
      visible={modalVisibility}
      onCancel={hideModal}
      onOk={hideModal}
      bodyStyle={{
        padding: 0,
        lineHeight: 0,
      }}
      width={"80%"}
      style={{
        top: innerHeight > 840 ? "100px" : 0,
        paddingBottom: innerHeight > 840 ? "24px" : 0,
      }}
      cancelButtonProps={{ hidden: true }}
    >
      <PDFViewer
        style={{
          height: innerHeight > 840 ? "540px" : `${(innerHeight * 80) / 100}px`,
          maxHeight: "540px",
          minHeight: "500px",
          width: "100%",
          border: "none",
        }}
      >
        <ReportDaftarPengajuan />
      </PDFViewer>
    </Modal>
  );
}
