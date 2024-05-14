import Link from "next/link";
import React from "react";
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
  <>
  <div className="bg-black h-svh flex flex-col items-center justify-center">
    <div className="flex gap-10">
      <Link href="/movies" className="font-bold py-4 px-6 rounded-lg bg-slate-500 hover:bg-slate-800 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Go to Films
      </Link>

      <Link href="/characters" className="font-bold py-4 px-6 rounded-lg bg-slate-500 hover:bg-slate-800 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        Go to Characters
      </Link>
    </div>
  </div>
  </>
)
}