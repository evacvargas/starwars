import { fetchFilmDetails } from "@/services/apiService";


export default function filmDetails({data}) {
  console.log(slug)
  return (
    <>
      <div>
          HOLA ES DETALLE DE PELI
      </div>
    </>
  )
}


export async function getStaticProps() {
  const data = await fetchFilmDetails(slug);

  return {
    props: {
      data,
    },
  };
}