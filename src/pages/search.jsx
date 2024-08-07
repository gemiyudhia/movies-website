import { useSearch } from "@/lib/store/useSearch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReusableDialog from "@/components/Fragments/ReuseableDialog";

const SearchPage = () => {
  const { query } = useParams();
  const { datas, isLoading, searchMovie } = useSearch((state) => ({
    datas: state.datas,
    isLoading: state.isLoading,
    searchMovie: state.searchMovie,
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
    searchMovie(query);
  }, [query]);

  return (
    <>
      <div className="py-3 md:container md:mx-auto md:py-12">
        <h1 className="mb-3 mt-6 text-3xl font-bold md:mt-0">
          Result For: {query}
        </h1>
        <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {datas?.map((item) => (
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
      </div>
      {selectedTv && (
        <ReusableDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedTv.title}
          imageSrc={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${selectedTv.poster_path}`}
          description={selectedTv.overview}
          popularity={selectedTv.popularity}
        />
      )}
    </>
  );
};

export default SearchPage;
