"use client";
import React from "react";
import Wallpaper from "../../public/backg.jpg";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Landing() {
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Wallpaper.src})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/home"
            className="font-bold py-4 px-6 rounded-lg bg-slate-500 hover:bg-slate-800 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
          >
            “Hello there!”
          </Link>
        </div>
      </div>
    </>
  );
}
