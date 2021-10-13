import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  body: {
    padding: "8px 12px",
  },
  info: {
    fontSize: 8,
  },
  infoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  table: {
    display: "table",
    fontSize: 10,
    width: "auto",
    borderStyle: "solid",
    borderColor: "rgb(150 150 150 / 50%)",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableHead: {
    flexDirection: "row",
  },
  tableRow: {
    position: "relative",
    backgroundColor: "#006cbb",
    color: "white",
    width: "47%",
    padding: 4,
    borderRight: "1 solid rgb(150 150 150 / 50%)",
    borderBottom: "1 solid rgb(150 150 150 / 50%)",
  },
  tableHeadCell: {
    margin: "auto",
    fontSize: 10,
  },
  tableBody: {
    flexDirection: "row",
  },
  tableBodyRow: {
    position: "relative",
    flexDirection: "column",
    backgroundColor: "white",
    color: "black",
    width: "47%",
    padding: 4,
    borderRight: "1 solid rgb(150 150 150 / 50%)",
    borderBottom: "1 solid rgb(150 150 150 / 50%)",
  },
  tableBodyCell: {
    fontSize: 10,
  },
  tableDataRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 2,
  },
  tableDataCol: {
    flexDirection: "column",
    width: "50%",
    flexWrap: "wrap",
  },
});
