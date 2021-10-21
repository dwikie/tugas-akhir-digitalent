import React from "react";
import { Carousel } from "antd";
import { ReactComponent as BannerSatu } from "../../assets/images/login-banner1.svg";
import { ReactComponent as BannerDua } from "../../assets/images/login-banner2.svg";
import { ReactComponent as BannerTiga } from "../../assets/images/login-banner3.svg";

export default function BannerLogin() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Carousel
        className="w-100"
        draggable
        swipeToSlide
        autoplay
        autoplaySpeed={8000}
      >
        <div className="mb-6 select-none">
          <BannerSatu className="mx-auto w-full h-full max-w-3xl" />
          <div className="max-w-xl mx-auto font-display text-4xl text-center text-primary">
            Bebas Pilih Jangka Waktu
          </div>
        </div>
        <div className="mb-6 select-none">
          <BannerDua className="mx-auto w-full h-full max-w-3xl" />
          <div className="max-w-xl mx-auto font-display text-4xl text-center text-primary">
            Angsuran Ringan
          </div>
        </div>
        <div className="mb-6 select-none">
          <BannerTiga className="mx-auto w-full h-full max-w-3xl" />
          <div className="max-w-xl mx-auto font-display text-4xl text-center text-primary">
            Proses Cepat dan Mudah
          </div>
        </div>
      </Carousel>
    </div>
  );
}
