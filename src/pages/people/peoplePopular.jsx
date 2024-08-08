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
import 'react-loading-skeleton/dist/skeleton.css';

const PeoplePopularPage = () => {
  const {
    data: {
      person: { popular: persons },
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

  useEffect(() => {
    fetchMovies("person", "popular");
  }, []);

  const handleViewDetails = (person) => {
    setSelectedPerson(person);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className="container mx-auto py-3 md:py-12">
      <div className="mb-3 mt-6 text-3xl font-bold md:mt-0">
        <h1>Person Popular</h1>
      </div>
      <div className="my-9 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Card key={index} className="max-w-sm shadow-xl">
                <CardHeader>
                  <Skeleton height={200} />
                </CardHeader>
                <CardContent className="flex h-24 flex-col text-slate-700">
                  <Skeleton width="80%" height={24} />
                  <Skeleton width="60%" height={16} className="mt-3" />
                </CardContent>
                <CardFooter>
                  <Skeleton width="100%" height={36} />
                </CardFooter>
              </Card>
            ))
          : persons?.map((person) => (
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
            ))}
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
    </div>
  );
};

export default PeoplePopularPage;
