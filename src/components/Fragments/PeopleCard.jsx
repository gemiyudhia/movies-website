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

const PeopleCard = () => {
  const {
    data: {
      person: { popular: people },
    },
    isLoading: {
      person: { popular: isLoading },
    },
    fetchMovies,
  } = useFetch((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    fetchMovies: state.fetchMovies,
  }));

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (person) => {
    setSelectedPerson(person);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPerson(null);
  };

  useEffect(() => {
    fetchMovies("person", "popular", 5); // Hanya ambil 5 orang
  }, [fetchMovies]);

  return (
    <>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {isLoading ? (
          <Skeleton />
        ) : (
          people?.map((person) => (
            <Card key={person.id} className="max-w-sm shadow-xl">
              <CardHeader>
                <img
                  src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${person.profile_path}`}
                  alt={person.name}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="flex h-24 flex-col text-slate-700">
                <CardTitle className="truncate text-slate-700">
                  {person.name}
                </CardTitle>
                <CardDescription className="mt-3 font-medium text-slate-700">
                  {person.known_for_department}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleViewDetails(person)}
                  className="bg-blue-700 font-bold hover:bg-blue-500"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      {selectedPerson && (
        <ReusableDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedPerson.name}
          imageSrc={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${selectedPerson.profile_path}`}
          description={selectedPerson.known_for_department}
          popularity={selectedPerson.popularity}
        />
      )}
    </>
  );
};

export default PeopleCard;
