import Link from "next/link";
import React from "react";
import 'tailwindcss/tailwind.css';
import Wallpaper from "../../../public/bgPages.jpeg";
import FilmIcon from "../../../public/icons/FilmIcon.jsx";
import CharacterIcon from "../../../public/icons/CharacterIcon.jsx";

export default function Home() {
  return (
  <>
  <div className="h-svh flex flex-col items-center justify-center"   style={{ backgroundImage: `url(${Wallpaper.src})` }}>
    <div className="flex gap-10">
      <div className="flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105">
      <Link href="/movies" className="font-bold py-4 px-6 rounded-lg bg-slate-500 hover:bg-slate-800 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <FilmIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20"/>
      </Link>
      <h1 className="text-white font-semibold text-2xl">Films</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 transform transition-transform duration-300 hover:scale-105">
      <Link href="/characters" className="font-bold py-4 px-6 rounded-lg bg-slate-500 hover:bg-slate-800 text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <CharacterIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20"/>
      </Link>
      <h1 className="text-white font-semibold text-2xl">Characters</h1>
    </div>
    </div>
  </div>
  </>
)
}