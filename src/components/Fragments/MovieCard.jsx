import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetch } from "@/lib/store/useFetch";
import { Skeleton } from "../ui/skeleton";
import ReusableDialog from "./ReuseableDialog";

const MovieCard = () => {
  const {
    data: {
      movie: { popular: movies },
    },
    isLoading: {
      movie: { popular: isLoading },
    },
    fetchMovies,
  } = useFetch((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    fetchMovies: state.fetchMovies,
  }));

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedMovie(null);
  };

  useEffect(() => {
    fetchMovies("movie", "popular", 5); // Hanya ambil 5 film
  }, [fetchMovies]);

  return (
    <>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {isLoading ? (
          <Skeleton />
        ) : (
          movies?.map((movie) => (
            <Card key={movie.id} className="max-w-sm shadow-xl">
              <CardHeader>
                <img
                  src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex h-24 flex-col text-slate-700">
                <CardTitle className="truncate text-slate-700">
                  {movie.title}
                </CardTitle>
                <CardDescription className="mt-3 font-medium text-slate-700">
                  {movie.release_date}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleViewDetails(movie)}
                  className="bg-blue-700 font-bold hover:bg-blue-500"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      {selectedMovie && (
        <ReusableDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedMovie.title}
          imageSrc={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${selectedMovie.poster_path}`}
          description={selectedMovie.overview}
          popularity={selectedMovie.popularity}
        />
      )}
    </>
  );
};

export default MovieCard;
