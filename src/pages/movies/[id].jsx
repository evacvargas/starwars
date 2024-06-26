import { useRouter } from 'next/router';
import { fetchFilmDetails } from "@/services/apiService";
import CharacterMiniCard from "@/components/Characters/CharacterMiniCard";
import Wallpaper from "../../../public/bgPages.jpeg";
import "tailwindcss/tailwind.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

export default function FilmDetails({ data }) {
  const router = useRouter();
  const { id } = router.query;
  const swiper = useSwiper();
  return (
    <>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${Wallpaper.src})` }}
      >
        <div className="flex flex-col gap-2 text-center text-white">
          <h1 className="text-5xl md:text-5xl lg:text-6xl">{data?.title}</h1>
          <h2 className="text-5xl md:text-5xl lg:text-6xl animate-bounce transition duration-500 ease-in-out font-semibold">
            {data?.episode_id}
          </h2>

          <div className="bg-gray-700 text-white px-3 py-1 rounded-full font-semibold text-sm md:text-base lg:text-lg m-auto">
            <h2>Director: {data?.director}</h2>
          </div>
        </div>

        <div className="w-full p-5 text-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data?.characters.map((item) => (
              <SwiperSlide key={data?.episode_id}>
                <CharacterMiniCard url={item} />
              </SwiperSlide>
            ))}
          <CustomNavigation/>
          </Swiper>
        </div>
      </div>
    </>
  );
}

function CustomNavigation() {
  const swiper = useSwiper();
  return (
    <>
    <div className="flex justify-center font-bold gap-10 text-white m-3 cursor-pointer text-4xl">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
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
