import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgProfile from "../../../public/character.jpeg";


export default function CharacterCard({ character }) {

  const handleCardClick = () => {
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
  };

    return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }} className="bg-white rounded-lg flex flex-col transition-transform transform-gpu hover:-translate-y-1 p-4">
        <Link className=" flex flex-col justify-between"
          href={`/characters/details`} 
          role="button">
          <Image
            src={ImgProfile}
            alt={"profile"}
            className="relative w-full rounded-t-lg"
            loading="lazy"
          />
          <div className="flex flex-col mt-2">
            {character?.name && character.name !== "n/a" && character.name !== "unknown" && (
              <h1 className="font-bold text-gray-400">{character.name}</h1>
            )}
            {character?.eye_color && character.eye_color !== "n/a" && character.eye_color !== "unknown" && (
              <h1>Eye color: {character.eye_color}</h1>
            )}
            {character?.gender && character.gender !== "n/a" && character.gender !== "unknown" && (
              <h1>Gender: {character.gender}</h1>
            )}
          </div>
        </Link>
      </div>
    )
  }