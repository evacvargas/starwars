import React from "react";
import Img from "../../../public/character.jpeg";
import Image from "next/image";
// import 'tailwindcss/tailwind.css'

export default function CharacterDetails({  character }) {
    return (
      <div>
        <Image
        src={Img}
        height={100}
        width={90}
        alt="img"
        />
        <h1>{character?.name}</h1>
        <h2>{character?.gender}</h2>
        <h2>{character?.eye_color}</h2>
        <h2>{character?.birth_year}</h2>
        <h2>{character?.hair_color}</h2>
        <h2>{character?.skin_color}</h2>
        <h2>{character?.mass}</h2>
      </div>
    )
  }
