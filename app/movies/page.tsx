import { lusitana } from "../ui/fonts";
import Search from "../ui/search";
import MovieList from "@/app/ui/movies/movie-list";
import Pagination from "@/app/ui/pagination";

export default async function Page({searchParams} : {
    searchParams?: {
        query?: string;
        page?: string;
    };
}){
    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page) || 1;
    const totalPages: number = 500;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Movies</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search movies..."/>
            </div>
            <div className="flex items-center justify-between">
                <MovieList query={query} currentPage={currentPage} />
            </div>

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}