import React from "react";


export default function Page({data}) {
  return (
    <h1>
      ESTAMOS EN PERSONAJES
    </h1>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/films/');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}