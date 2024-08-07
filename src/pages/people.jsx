import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PeopleCard from "@/components/Fragments/PeopleCard";

const PeoplePage = () => {
  return (
    <div className="container mx-auto md:mt-3">
      <div className="my-3 flex items-center justify-between md:my-6">
        <h1 className="text-3xl font-bold">People</h1>
        <Button variant="link" className="hover:text-blue-500">
          <Link to="/people-popular">Show All</Link>
        </Button>
      </div>
      <div>
        <PeopleCard />
      </div>
    </div>
  );
};

export default PeoplePage;
