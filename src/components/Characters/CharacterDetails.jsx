import React from "react";
import Img from "../../../public/characterDetails.jpeg";
import Image from "next/image";
import 'tailwindcss/tailwind.css'

export default function CharacterDetails({  character }) {
  console.log("veamos", character)
    return (
      <>
        <div>
          <div className="bg-white p-10">
            <Image
            src={Img}
            alt="img"
            className="rounded-t-lg"
            loading="lazy"
            />
          </div>

          <div className="rounded-t-none rounded-b-lg bg-slate-500 w-full p-4 capitalize cursor-pointer gap-5 justify-center">
            {character?.name && character.name !== "n/a" && character.name !== "unknown" && (
            <h1 className="text-gray-400 font-bold text-4xl md:text-6xl lg:text-8xl w-full drop-shadow-lg">{character.name}</h1>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {character?.gender && character.gender !== "n/a" && character.gender !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Gender: {character.gender}
                </div>
              )}
              {character?.eye_color && character.eye_color !== "n/a" && character.eye_color !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Eye Color: {character.eye_color}
                </div>
              )}
              {character?.birth_year && character.birth_year !== "n/a" && character.birth_year !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Birth Year: {character.birth_year}
                </div>
              )}
              {character?.hair_color && character.hair_color !== "n/a" && character.hair_color !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Hair Color: {character.hair_color}
                </div>
              )}
              {character?.skin_color && character.skin_color !== "n/a" && character.skin_color !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Skin Color: {character.skin_color}
                </div>
              )}
              {character?.mass && character.mass !== "n/a" && character.mass !== "unknown" && (
                <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg">
                  Mass: {character.mass}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
