import Image from "next/image";
import React from "react";
import Img from "../../../public/films.jpg";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function FilmCard({ title, episode, id }) {
  return (
    <Link
      href={`/movies/${id}`}
      className="bg-white rounded-lg shadow-lg flex flex-col transition-transform transform-gpu hover:-translate-y-1"
      role="button"
    >
      <Image
        src={Img}
        height={90}
        width={90}
        alt="film"
        className="relative h-70 w-full rounded-t-lg"
      />
      <div className="flex flex-col gap-2 p-6">
        <h1 className="text-lg font-bold text-center">{title}</h1>
        <h2 className="text-4xl text-center">{episode}</h2>
      </div>
    </Link>
  );
}
