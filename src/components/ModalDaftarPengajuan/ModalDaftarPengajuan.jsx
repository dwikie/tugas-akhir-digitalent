import { Modal } from "antd";
import { DateToLocale } from "../../utils/DateConversion";
import React, { useEffect, useState } from "react";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import FormatNumberCurrency from "../../utils/FormatNumberCurrency";
import { StatusPengajuan } from "../../utils";

export default function ModalDaftarPengajuan({
  modalVisibility,
  hideModal,
  data,
  reportStyle,
}) {
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
      width={innerWidth > 640 ? "80%" : "90%"}
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
        <Document>
          <Page style={reportStyle.body} size="Legal">
            <View style={reportStyle.infoWrapper}>
              <Text style={reportStyle.info}>
                Report Daftar Pengajuan - Home Loans
              </Text>
              <Text style={reportStyle.info}>
                {DateToLocale(new Date(), {
                  locale: navigator.language || "id-ID",
                })}
              </Text>
            </View>
            <View style={reportStyle.title}>
              <Text>Daftar Pengajuan</Text>
            </View>
            <View style={reportStyle.table}>
              {/* thead */}
              <View style={reportStyle.tableHead}>
                <View style={{ ...reportStyle.tableRow, width: "6%" }}>
                  <Text style={{ ...reportStyle.tableHeadCell, margin: 0 }}>
                    No.
                  </Text>
                </View>
                <View style={reportStyle.tableRow}>
                  <Text style={reportStyle.tableHeadCell}>
                    Data Diri Pengaju
                  </Text>
                </View>
                <View style={reportStyle.tableRow}>
                  <Text style={reportStyle.tableHeadCell}>Data KPR</Text>
                </View>
              </View>
              {/* tbody */}
              {data.length ? (
                data.map((pengajuan, index) => (
                  <View style={reportStyle.tableBody}>
                    <View style={{ ...reportStyle.tableBodyRow, width: "6%" }}>
                      <Text style={reportStyle.tableBodyCell}>{index + 1}</Text>
                    </View>
                    <View style={reportStyle.tableBodyRow}>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>NIK</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>{pengajuan?.Nik}</Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Nama Lengkap</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>{pengajuan?.NamaLengkap}</Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Tempat, Tanggal Lahir</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>{`${pengajuan?.TempatLahir}, ${DateToLocale(
                            pengajuan?.TanggalLahir,
                            {},
                          )}`}</Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Alamat</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>{pengajuan?.Alamat}</Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Pekerjaan</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>{pengajuan?.Pekerjaan}</Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Pendapatan Perbulan</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>
                            {FormatNumberCurrency(
                              pengajuan?.PendapatanPerbulan,
                              {},
                            )}
                          </Text>
                        </View>
                      </View>
                      <View style={reportStyle.tableDataRow}>
                        <View style={reportStyle.tableDataCol}>
                          <Text>Status Verifikasi</Text>
                        </View>
                        <View style={reportStyle.tableDataCol}>
                          <Text>
                            {StatusPengajuan(pengajuan?.Status).detail}
                          </Text>
                        </View>
                      </View>
                    </View>

                    {pengajuan?.CompleteDoc?.ID || (
                      <View style={reportStyle.tableBodyRow}>
                        <Text
                          style={{
                            ...reportStyle.tableBodyCell,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "auto",
                          }}
                        >
                          Belum menginput Dokumen Pelengkap
                        </Text>
                      </View>
                    )}
                  </View>
                ))
              ) : (
                <View style={reportStyle.tableBody}>
                  <View style={reportStyle.tableDataRow}>
                    <View style={{ width: "100%", margin: "auto" }}>
                      <Text>Data tidak ditemukan</Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Modal>
  );
}
