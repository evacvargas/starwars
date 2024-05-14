import { fetchFilmDetails } from "@/services/apiService";
import CharacterMiniCard from "@/components/Characters/CharacterMiniCard";

export default function FilmDetails({ data }) {
  return (
    <>
      <div>
        <div>
          {data?.title}
          {data?.episode_id}
          {data?.director}
        </div>

        <div>
          {data?.characters.map((item)=>
          <CharacterMiniCard
            key={data?.episode_id}
            url={item}
          />
          )}
        </div>
      </div>
    </>
  );
}


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const data = await fetchFilmDetails(id);

  return {
    props: {
      data,
    },
  };
}