import React from "react";
import { BannerRegister, FormRegister } from "../components";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";

export default function Register() {
  return (
    <LoginRegisterLayout
      banner={<BannerRegister />}
      form={<FormRegister />}
      type="register"
      title="Daftar Home Loans"
    />
  );
}
