import Image from "next/image";
import Link from "next/link";
import React from "react";
import ImgProfile from "../../../public/yoda.jpg";


export default function CharacterCard({ character }) {

  const handleCardClick = () => {
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
  };

    return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }}>
        <Link 
          href={`/characters/details`} 
          role="button">
          <Image
            src={ImgProfile}
            alt={"profile"}
            height={50}
            width={70}
          />
          <h1>{character?.name}</h1>
          <h1>{character?.url}</h1>
          <h1>{character?.img}</h1>
          <h1>{character?.eyesColor}</h1>
          <h1>{character?.gender}</h1>
        </Link>
      </div>
    )
  }