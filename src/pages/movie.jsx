import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/Fragments/MovieCard";

const MoviePage = () => {
  return (
    <div className="container mx-auto md:mt-3">
      <div className="my-3 flex items-center justify-between md:my-6">
        <h1 className="text-3xl font-bold">Movies</h1>
        <Button variant="link" className="hover:text-blue-500">
          <Link to="/movie-popular">Show All</Link>
        </Button>
      </div>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MoviePage;
