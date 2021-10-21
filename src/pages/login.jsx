import React from "react";
import { FormLogin } from "../components";
import BannerLogin from "../components/BannerLogin/BannerLogin";
import LoginRegisterLayout from "../layouts/LoginRegisterLayout";

export default function Login() {
  return (
    <LoginRegisterLayout
      banner={<BannerLogin />}
      form={<FormLogin />}
      type="login"
      title="Masuk ke Home Loans"
    />
  );
}
