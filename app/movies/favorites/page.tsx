import { lusitana } from "../../ui/fonts";
import Search from "../../ui/search";
import Pagination from "@/app/ui/pagination";
import FavoriteMovies from "@/app/ui/movies/favorite-movies";


export default async function Page({searchParams} : {
    searchParams?: {
        query?: string;
        page?: string;
    };
}){
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    //const totalPages = await fetchMoviesPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Favorite movies</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search movies..."/>
            </div>
            <div className="flex items-center justify-between">
                <FavoriteMovies query={query} currentPage={currentPage} />
            </div>


        </div>
    );
}