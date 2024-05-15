import CharacterCard from "@/components/Characters/CharacterCard";
// import { fetchAllCharacters } from "@/services/apiService";
import React, { useEffect, useState } from "react";
import Wallpaper from "../../../public/bgPages.jpeg";
import "tailwindcss/tailwind.css";

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
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Wallpaper.src})` }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-16">
          {data?.results?.map((character, index) => (
            <CharacterCard key={index} character={character} />
          ))}
        </div>
        <div className="text-3xl pb-6 text-center flex justify-center gap-16 text-white cursor-pointer">
          {prevUrl && <div onClick={getPrevPage}>Prev</div>}
          {nextUrl && <div onClick={getNextPage}>Next</div>}
        </div>
      </div>
    </>
  );
}
