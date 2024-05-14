// pages/characters/index.js
import { useEffect, useState } from "react";
import CharacterDetails from "@/components/Characters/CharacterDetails";

export default function CharactersPage() {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const storedCharacterData = localStorage.getItem("characterData");
    if (storedCharacterData) {
      setCharacterData(JSON.parse(storedCharacterData));
    }
  }, []);


  return (
    <div>
      <h1>Personaje de Star Wars</h1>
        <CharacterDetails character={characterData} />
    </div>
  );
}
