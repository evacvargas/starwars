import CharacterCard from "@/components/Characters/CharacterCard";
import { fetchAllCharacters } from "@/services/apiService";
import React from "react";
// import 'tailwindcss/tailwind.css'

export default function Characters({data}) {
  console.log("data", data)
  return (
    <>
    <h1>vista de listado de personajes</h1>
      <div className="flex">
      {data.results.map((character, index) => (
          <CharacterCard 
            key={index}
            character={character}
          />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchAllCharacters();

  return {
    props: {
      data,
    },
  };
}