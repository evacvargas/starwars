import { fetchFilmData } from "@/services/apiService";
import React from "react";
import Card from "../../components/Card";


export default function Page({ data }) {
    return (
      <div>
        {data.results.map((film, index) => (
          <Card
            key={film.episode_id}
            id={index + 1}
            // image={film.mainimage}
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