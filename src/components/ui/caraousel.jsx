import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetch } from "@/lib/store/useFetch";
import { NextArrow, PrevArrow } from "./arrows";
import { Button } from "./button";
import ReusableDialog from "../Fragments/ReuseableDialog";

const Carousel = () => {
  const {
    data: {
      movie: { now_playing: movies },
    },
    isLoading: {
      movie: { now_playing: isLoading },
    },
    fetchMovies,
  } = useFetch((state) => ({
    data: state.data,
    isLoading: state.isLoading,
    fetchMovies: state.fetchMovies,
  }));

  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    fetchMovies("movie", "now_playing");
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrow: true,
  };

  return (
    <>
      <div className="relative py-3 md:container md:mx-auto md:py-12">
        <h1 className="mb-3 mt-6 text-3xl font-bold md:mt-0">
          Movie Now Playing 🎬
        </h1>
        <Slider {...settings}>
          {movies?.map((movie) => (
            <div key={movie.id} className="relative w-full">
              <img
                src={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${movie.backdrop_path}`}
                alt={movie.title}
                className="min-h-screen w-full bg-center object-cover object-center brightness-50 md:rounded-xl"
              />
              <div className="absolute bottom-20 left-10 space-y-3 text-white">
                <h1 className="line-clamp-2 text-3xl font-bold tracking-tight lg:text-4xl">
                  {movie.title}
                </h1>
                <p className="text-lg font-medium">{movie.release_date}</p>
                <p className="font-medium">Popularity: {movie.popularity}</p>
                <div className="space-y-3">
                  <Button
                    onClick={() => handleViewDetails(movie)}
                    className="mt-2 bg-blue-700 py-4 font-bold hover:bg-blue-500 md:w-72 lg:w-80"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {selectedItem && (
        <ReusableDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedItem.title}
          imageSrc={`${import.meta.env.VITE_REACT_BASE_IMAGE_URL}${selectedItem.poster_path}`}
          description={selectedItem.overview}
          popularity={selectedItem.popularity}
        />
      )}
    </>
  );
};

export default Carousel;
