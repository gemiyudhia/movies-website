import React, { useEffect, useState } from "react";
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

const SeriesTvCard = () => {
  const {
    data: {
      tv: { popular: series },
    },
    isLoading: {
      tv: { popular: isLoading },
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
    fetchMovies("tv", "popular", 5); // Hanya ambil 5 series TV
  }, []);

  return (
    <>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {isLoading ? (
          <Skeleton />
        ) : (
          series?.map((tv) => (
            <Card key={tv.id} className="max-w-sm shadow-xl">
              <CardHeader>
                <img
                  src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${tv.poster_path}`}
                  alt={tv.title}
                  className="h-72 w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex h-24 flex-col text-slate-700">
                <CardTitle className="truncate text-slate-700">
                  {tv.original_name}
                </CardTitle>
                <CardDescription className="mt-3 font-medium text-slate-700">
                  {tv.first_air_date}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleViewDetails(tv)}
                  className="bg-blue-700 font-bold hover:bg-blue-500"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
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
    </>
  );
};

export default SeriesTvCard;
