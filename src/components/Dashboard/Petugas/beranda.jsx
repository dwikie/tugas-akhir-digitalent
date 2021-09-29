import { Empty } from "antd";
import React from "react";
import { motion } from "framer-motion";

export default function Beranda() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Empty description="Belum ada pengajuan baru." />
    </motion.div>
  );
}
