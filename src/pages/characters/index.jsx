import CharacterCard from "@/components/Characters/CharacterCard";
import { fetchAllCharacters } from "@/services/apiService";
import React, { useEffect, useState } from "react";
// import 'tailwindcss/tailwind.css'

export default function Characters() {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const fetchAllCharacters = async () => {
    const res = await fetch("https://swapi.dev/api/people/");
    const json = await res.json();
    setData(json);
    setNextUrl(json.next);
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const getPrevPage = async () => {
    const res = await fetch(prevUrl);
    const json = await res.json();
    setData(json);
    setNextUrl(json.next);
    setPrevUrl(json.previous);
  };

  const getNextPage = async () => {
    const res = await fetch(nextUrl);
    const json = await res.json();
    setData(json);
    setNextUrl(json.next);
    setPrevUrl(json.previous);
  };

  return (
    <>
      <h1>vista de listado de personajes</h1>
      <div className="flex">
        {data?.results?.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
        <div>
          {prevUrl && <div onClick={getPrevPage}>PREV</div>}
          {nextUrl && <div onClick={getNextPage}>NEXT</div>}
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
//   const data = await fetchAllCharacters();

//   return {
//     props: {
//       data,
//     },
//   };
// }
