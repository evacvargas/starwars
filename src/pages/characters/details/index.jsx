import { useEffect, useState } from "react";
import CharacterDetails from "@/components/Characters/CharacterDetails";
import "tailwindcss/tailwind.css";
import Wallpaper from "../../../../public/bgPages.jpeg";


export default function CharactersPage() {
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    const storedCharacterData = localStorage.getItem("selectedCharacter");
    if (storedCharacterData) {
      setCharacterData(JSON.parse(storedCharacterData));
      
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"  style={{ backgroundImage: `url(${Wallpaper.src})` }}>
      <div className="p-10">
        <CharacterDetails character={characterData} />
      </div>
    </div>
  );
}
