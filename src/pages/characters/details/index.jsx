// pages/characters/index.js
import { useEffect, useState } from "react";
import CharacterDetails from "@/components/Characters/CharacterDetails";
import "tailwindcss/tailwind.css";


export default function CharactersPage() {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const storedCharacterData = localStorage.getItem("selectedCharacter");
    if (storedCharacterData) {
      setCharacterData(JSON.parse(storedCharacterData));
      
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="p-10">
        <CharacterDetails character={characterData} />
      </div>
    </div>
  );
}
