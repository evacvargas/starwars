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
      localStorage.setItem("characterData", JSON.stringify(characterData));
    };

    fetchData();
  }, [url]);

  if (!character) {
    return <div>Loading...</div>;
  }

    return (
      <div>
        <Link
          href={`/characters/details`} 
          role="button">
          <h1>{character?.name}</h1>
          <h1>{character?.url}</h1>
          <Image
            src={ImgProfile}
            alt={"profile"}
            height={50}
            width={70}
          />
        </Link>
      </div>
    )
  }