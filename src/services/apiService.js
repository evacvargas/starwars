
export async function fetchFilmData() {
    const res = await fetch('https://swapi.dev/api/films/');
    const data = await res.json();
    return data;
  }

  export async function fetchFilmDetails(id) {
    const res = await fetch(`https://swapi.dev/api//films/${id}`);
    const data = await res.json();
    return data;
  }