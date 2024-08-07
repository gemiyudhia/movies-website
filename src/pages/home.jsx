import Carousel from "@/components/ui/caraousel";
import MovieCard from "@/components/Fragments/MovieCard";
import { Button } from "@/components/ui/button";
import SeriesTvCard from "@/components/Fragments/SeriesTvCard";
import PeopleCard from "@/components/Fragments/PeopleCard";
import { Link } from "react-router-dom";
import SerialTvPage from "./serialTv";
import PeoplePage from "./people";
import MoviePage from "./movie";

const HomePage = () => {
  return (
    <div className="mt-4">
      <Carousel />
      {/* Movies  */}
      <MoviePage />

      {/* SeriesTv */}
      <SerialTvPage />

      {/* People */}
      <PeoplePage />
    </div>
  );
};

export default HomePage;
