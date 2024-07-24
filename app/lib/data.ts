const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const ACCOUNT_ID = process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        contentType: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};

export async function fetchFavoriteMovies(query: string, currentPage: number){
/* Récupération des vidéos favorites*/
    try {
        const response = await fetch(`${BASE_URL}/account/${ACCOUNT_ID}/favorite/movies?language=en-US&page=1&`, options)

        const data = await response.json();
        return data.results
    } catch (err) {
        console.error('Error fetching movies:', err);
        return []; // Renvoie un tableau vide en cas d'erreur
    }

}


export async function fetchFilteredMovies(query: string, currentPage: number){

    try {
        const response = await fetch(`${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`, options)

        const data = await response.json();
        return data.results.filter((movie: { title: string; overview: string; }) =>
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            (movie.overview && movie.overview.toLowerCase().includes(query.toLowerCase()))
        ); // Renvoie les résultats des films
    } catch (err) {
        console.error('Error fetching movies:', err);
        return []; // Renvoie un tableau vide en cas d'erreur
    }

}

export async  function fetchMovieDetails({id}: {id: number }){
    return fetch(`${BASE_URL}/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch(err => console.error(err));
}

export async function AddMovieToFavorite({ media_id }: { media_id: number }) {

    /*Ajout de favoris*/
    const options1 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },

        body: JSON.stringify({ media_id: media_id, media_type: 'movie', favorite: true })
    };

    try {
        const response = await fetch(`${BASE_URL}/account/${ACCOUNT_ID}/favorite`, options1);
        return await response.json();
    } catch (err) {
        console.error(err);
        throw err;
    }
}






