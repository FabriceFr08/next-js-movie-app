import {fetchMovieDetails} from "@/app/lib/data";
import {lusitana} from "@/app/ui/fonts";
import {AddMovieToFavorite} from "@/app/lib/data";
import {Button} from "@/app/ui/button";
import { redirect } from 'next/navigation'

export default async function Page({ params }: { params: { id: number } }){
    const id = params.id;
    const movie = await fetchMovieDetails({id});

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Movie details</h1>
            </div>
            <div className="w-full bg-white rounded-lg shadow-md overflow-hidden md:mt-8">
                <img className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                     alt={movie.title}/>
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
                    <p className="text-gray-600 text-sm mb-4"><strong>Original Title:</strong> {movie.original_title}
                    </p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Original
                        Language:</strong> {movie.original_language}</p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="text-gray-800 mb-4"><strong>Overview:</strong> {movie.overview}</p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Vote Average:</strong> {movie.vote_average}</p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Vote Count:</strong> {movie.vote_count}</p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Popularity:</strong> {movie.popularity}</p>
                    <p className="text-gray-600 text-sm mb-4"><strong>Adult:</strong> {movie.adult ? 'Yes' : 'No'}</p>
                    <div className="text-gray-600 text-sm mb-4">
                    </div>
                </div>
            </div>

            <div className="mt-5 flex w-full justify-center">
                <Button />
            </div>

        </div>
    );
}