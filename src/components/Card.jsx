import Image from "next/image";
import React from "react";
import Img from "../../public/films.jpg";
import Link from "next/link";


export default function Page({ title, episode, id }) {
  console.log(id)
    return (
      <div>
        <Link href={`/movies/${id}`}
          className="bg-white rounded-lg shadow-lg flex flex-col hover:bg-hover transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"  
          role="button">
          <Image
          src={Img}
          height={100}
          width={90}
          />
          <h1>{title}</h1>
          <h2>{episode}</h2>
        </Link>
      </div>
    )
  }