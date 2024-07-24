import {Movie} from "@/app/lib/definition";
import {fetchFavoriteMovies} from "../../lib/data";
import Link from 'next/link';
import Image from "next/image";


export default async function FavoriteMovies({query, currentPage} : {
    query: string;
    currentPage: number;
}){
    const movies = await fetchFavoriteMovies(query, currentPage);


    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie: Movie) => (
                <div key={movie.id} className="max-w-xs rounded overflow-hidden shadow-lg">
                    <Link href={`/movies/${movie.id}`}>

                        <Image className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                               width={1000} height={700}   alt={movie.title}/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-lg mb-2">{movie.title}</div>
                            <p className="text-gray-600 text-sm">{movie.release_date}</p>
                        </div>

                    </Link>
                </div>
            ))}
        </div>
    );
}