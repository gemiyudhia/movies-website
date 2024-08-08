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
import React, { useEffect, useState } from "react";
import ReusableDialog from "@/components/Fragments/ReuseableDialog";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TvOnTheAirPage = () => {
  const {
    data: {
      tv: { on_the_air: series },
    },
    isLoading: {
      tv: { on_the_air: isLoading },
    },
    fetchMovies,
  } = useFetch((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    fetchMovies: state.fetchMovies,
  }));
  const [selectedTv, setSelectedTv] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (series) => {
    setSelectedTv(series);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedTv(null);
  };

  useEffect(() => {
    fetchMovies("tv", "on_the_air");
  }, []);

  return (
    <div className="container mx-auto py-3 md:py-12">
      <div className="mb-3 mt-6 text-3xl font-bold md:mt-0">
        <h1>Series On The Air</h1>
      </div>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {isLoading
          ? Array(10)
              .fill()
              .map((_, index) => (
                <Card key={index} className="max-w-sm shadow-xl">
                  <CardHeader>
                    <Skeleton height={300} />
                  </CardHeader>
                  <CardContent className="flex h-24 flex-col text-slate-700">
                    <Skeleton height={20} width="80%" />
                    <Skeleton height={20} width="50%" className="mt-3" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton width="100%" height={40} />
                  </CardFooter>
                </Card>
              ))
          : series?.map((serie) => (
              <Card key={serie.id} className="max-w-sm shadow-xl">
                <CardHeader>
                  <img
                    src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${serie.poster_path}`}
                    alt={serie.name}
                    className="h-full w-full rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="flex h-24 flex-col text-slate-700">
                  <CardTitle className="truncate text-slate-700">
                    {serie.name}
                  </CardTitle>
                  <CardDescription className="mt-3 font-medium text-slate-700">
                    {serie.first_air_date}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => handleViewDetails(serie)}
                    className="bg-blue-700 font-bold hover:bg-blue-500"
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
      </div>
      {selectedTv && (
        <ReusableDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedTv.name}
          imageSrc={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${selectedTv.poster_path}`}
          description={selectedTv.overview}
          popularity={selectedTv.popularity}
        />
      )}
    </div>
  );
};

export default TvOnTheAirPage;
