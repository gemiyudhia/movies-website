import SeriesTvCard from "@/components/Fragments/SeriesTvCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const SerialTvPage = () => {

  return (
    <div className="container mx-auto md:mt-3">
      <div className="my-3 flex items-center justify-between md:my-6">
        <h1 className="text-3xl font-bold">Series TV</h1>
        <Button variant="link" className="hover:text-blue-500">
          <Link to="/tv-popular">Show All</Link>
        </Button>
      </div>
      <div>
        <SeriesTvCard />
      </div>
    </div>
  );
};

export default SerialTvPage;
