'use client';
import {AddMovieToFavorite} from "@/app/lib/data";
import {useParams} from "next/navigation";
import { useRouter } from 'next/navigation';


export function Button() {
    const {id} = useParams();
    const router = useRouter();
    const handleAddToFavorite = async () => {
        try {

            await AddMovieToFavorite({media_id : Number(id)});
            // Redirection en cas de succès
            router.push('/movies/favorites?success=Movie added to favorites');
        } catch (error) {
            console.error('Error', error);
        }
    };
    return (
        <button
            className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            onClick={handleAddToFavorite}
        >
            <span className="hidden md:block">Add to favorite</span>{' '}

        </button>
    );
}