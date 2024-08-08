import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/lib/store/useFetch";
import ReusableDialog from "@/components/Fragments/ReuseableDialog";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieTopRatedPage = () => {
  const {
    data: {
      movie: { top_rated: movies },
    },
    isLoading: {
      movie: { top_rated: isLoading },
    },
    fetchMovies,
  } = useFetch((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    fetchMovies: state.fetchMovies,
  }));

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchMovies("movie", "top_rated");
  }, []);

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto py-3 md:py-12">
      <div className="mb-3 mt-6 text-3xl font-bold md:mt-0">
        <h1>Movie Top Rated</h1>
      </div>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Card key={index} className="max-w-sm shadow-xl">
                <CardHeader>
                  <Skeleton height={200} />
                </CardHeader>
                <CardContent className="flex h-24 flex-col text-slate-700">
                  <CardTitle className="truncate text-slate-700">
                    <Skeleton width={`80%`} />
                  </CardTitle>
                  <CardDescription className="mt-3 font-medium text-slate-700">
                    <Skeleton width={`60%`} />
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Skeleton width={`100%`} height={40} />
                </CardFooter>
              </Card>
            ))
          : movies?.map((item) => (
              <Card key={item.id} className="max-w-sm shadow-xl">
                <CardHeader>
                  <img
                    src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${item.poster_path}`}
                    alt={item.title}
                    className="h-full w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="flex h-24 flex-col text-slate-700">
                  <CardTitle className="truncate text-slate-700">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-3 font-medium text-slate-700">
                    {item.release_date}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => handleViewDetails(item)}
                    className="bg-blue-700 font-bold hover:bg-blue-500"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
    </div>
  );
};

export default MovieTopRatedPage;
