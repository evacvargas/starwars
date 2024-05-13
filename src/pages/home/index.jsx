
// import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function Home() {
  return (
  <>
  <div className="h-lvh flex flex-col items-center justify-center bg-slate-400">
    <div>
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