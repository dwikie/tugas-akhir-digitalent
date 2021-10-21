import React from "react";
import { Link } from "react-router-dom";

export default function LoginRegisterLayout({ type, banner, title, form }) {
  return (
    <main>
      <aside className="flex flex-row min-h-screen relative">
        <div className="hidden md:flex w-6/12 flex-col px-8 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary-lightest"></div>
          <div className="absolute top-0 left-0 w-full h-full login-register-texture"></div>
          <section className="h-full flex flex-col justify-center items-center z-10 w-full">
            {/* Banner Here */}
            {banner}
          </section>
        </div>
        <div className="w-full md:w-6/12 flex justify-between flex-col p-8">
          {type === "login" ? (
            <div className="text-primary text-right w-auto md:h-1/12">
              Saya belum punya akun
              <Link
                to={`/register`}
                className="text-primary-dark font-semibold hover:text-primary-light pl-3 transition-colors duration-150"
              >
                Daftar
              </Link>
            </div>
          ) : (
            <div className="text-primary text-right w-auto md:h-1/12">
              Saya sudah punya akun
              <Link
                to={`/login`}
                className="text-primary-dark font-semibold hover:text-primary-light pl-3 transition-colors duration-150"
              >
                Masuk
              </Link>
            </div>
          )}
          <div className="h-11/12 w-full flex flex-col justify-between mt-8 md:mt-0">
            <div></div>
            <section className="w-full md:w-11/12 mx-auto max-w-md">
              <div className="text-primary font-display text-2xl text-center mb-4 md:mb-6">
                {title}
              </div>
              {<div className="mb-6">{form}</div>}
            </section>
            <section className="text-center p-4 border-t border-primary-lightest">
              The Sidemen
            </section>
          </div>
        </div>
      </aside>
    </main>
  );
}
