import FilmCard from "@/components/Movies/FilmCard";
import { fetchFilmData } from "@/services/apiService";
import React from "react";

export default function Home({ data }) {
  return (
    <div className="bg-black px-20 py-20 grid grid-flow-row gap-8 text-neutral-600 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.results.map((film, index) => (
        <FilmCard
          key={film.episode_id}
          id={index + 1}
          title={film.title}
          episode={film.episode_id}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchFilmData();

  return {
    props: {
      data,
    },
  };
}
