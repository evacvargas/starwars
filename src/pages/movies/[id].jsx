import { fetchFilmDetails } from "@/services/apiService";
// import Image from "next/image";
// import Img from "../../../public/yoda.jpg";
import CharacterMiniCard from "@/components/Characters/CharacterMiniCard";

export default function FilmDetails({ data }) {
  return (
    <>
      <div className='bg-black'>
        <div className='border-8 border-indigo-600'>
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