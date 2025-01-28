const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
{/*const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2YxYzQwMmI1OGM0MTQ5ODdhZGY5ZWY3NmJiNWZiYiIsIm5iZiI6MTcwNjQ4NjQ1OC4wMTEwMDAyLCJzdWIiOiI2NWI2ZWFiYTBjZDMyYTAwZTRlNWEwYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.08ByJNPmadCq8lYbM6eP0V3x-5LAvhgxRnYSPccSySQ'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err)); */}

function getNowPlayingMovies() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        }
    };

    return fetch
    ("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
     options
)
    .then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
    })
    .catch((error) => {
        console.error("Error fetching now playing movies:", error);
        throw error;
    });
}