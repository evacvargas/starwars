import FilmCard from "@/components/Movies/FilmCard";
import { fetchFilmData } from "@/services/apiService";
import React from "react";


export default function Home({ data }) {
    return (
      <div>
        {data.results.map((film, index) => (
          <FilmCard
            key={film.episode_id}
            id={index + 1}
            title={film.title}
            episode={film.episode_id}
          />
        ))}
      </div>
    )
  }

  export async function getStaticProps() {
    const data = await fetchFilmData();
  
    return {
      props: {
        data,
      },
    };
  }