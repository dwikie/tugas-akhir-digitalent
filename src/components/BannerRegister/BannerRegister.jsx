import React from "react";

import { ReactComponent as Banner } from "../../assets/images/register-banner1.svg";

export default function BannerRegister() {
  return (
    <>
      <div className="mb-6 select-none w-full h-full mx-auto max-w-3xl flex flex-col justify-center">
        <Banner className="mx-auto w-full max-w-3xl" />
        <div className="max-w-xl mx-auto font-display text-4xl text-center text-primary">
          Punya Rumah diusia Muda ? Bisa !
        </div>
      </div>
    </>
  );
}
