import React from "react";

import bgImage from "../../assets/img.png";
import logo from "../../assets/logo.png";

export default function OtpVerification() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative  flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div class="w-full form  max-w-md  backdrop-blur-xl border border-white/10 rounded-3xl  p-9  text-white">
        <div class="flex items-center gap-2 justify-center mb-7">
          <img src={logo} alt="" className="h-5 object-cover" />
        </div>

        <h1 class="text-3xl font-semibold text-center mb-2">
          Management Portal
        </h1>
        <p class="text-center text-gray-400 text-sm mb-8">
          Welcome to the official management portal of
          <br />
          Surakshit Saathi Training Program
        </p>

        <input
          type="tel"
          placeholder="Enter one-time verification code"
          class="w-full bg-black/10 border border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none rounded-lg px-4 py-2 text-sm placeholder-gray-400 mb-4"
        />

        <label class="flex items-center  gap-2 text-xs text-gray-400 mb-5">
          <input type="checkbox" class="mt-1 accent-blue-500" />
          <span className="mt-0.5 text-[12px]">
            Haven’t got the code? <a href="#">Resend</a>
          </span>
        </label>

        <button class="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition rounded-lg py-2 font-medium">
          Login
        </button>
      </div>
    </div>
  );
}
