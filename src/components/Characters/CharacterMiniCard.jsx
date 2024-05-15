import Image from "next/image";
import { fetchCharacter } from "@/services/apiService";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import ImgProfile from "../../../public/yoda.jpg";


export default function CharacterMiniCard({url}) {
  const [character, setCharacterData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await fetchCharacter(url);
      setCharacterData(characterData);
    };

    fetchData();
  }, [url]);

  const handleCardClick = () => {
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer" }} className="bg-white flex rounded-lg h-64 transition-transform transform-gpu hover:-translate-y-1">
      <Link href={`/characters/details`} className="w-full">
        <Image 
        src={ImgProfile} 
        alt={"profile"} 
        className="relative h-4/5 w-full rounded-t-lg"
        loading="lazy"
        />
        <h1 className="text-blue-900 font-bold" style={{ lineHeight: "50px" }}>{character?.name}</h1>
      </Link>
    </div>
  );
}