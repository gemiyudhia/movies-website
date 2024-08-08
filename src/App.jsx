import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilmPage from "./pages/film";
import HomePage from "./pages/home";
import SerialTvPage from "./pages/serialTv";
import Navbar from "./components/Fragments/Navbar";
import Footer from "./components/Fragments/Footer";
import SearchPage from "./pages/search";
import MoviePopularPage from "./pages/movie/moviePopular";
import TvPopularPage from "./pages/tv/tvPopular";
import PeoplePopularPage from "./pages/people/peoplePopular";
import MovieNowPlayingPage from "./pages/movie/movieNowPlaying";
import MovieTopRatedPage from "./pages/movie/movieTopRated";
import MovieUpComingPage from "./pages/movie/movieUpComing";
import TvAiringTodayPage from "./pages/tv/tvAiringToday";
import TvOnTheAirPage from "./pages/tv/tvOnTheAir";
import TvTopRated from "./pages/tv/tvTopRated";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<FilmPage />} />
          <Route path="/movie-popular" element={<MoviePopularPage />} />
          <Route path="/movie-now-playing" element={<MovieNowPlayingPage />} />
          <Route path="/movie-top-rated" element={<MovieTopRatedPage />} />
          <Route path="/movie-up-coming" element={<MovieUpComingPage />} />

          <Route path="/tv-popular" element={<TvPopularPage />} />
          <Route path="/tv-airing" element={<TvAiringTodayPage />} />
          <Route path="/tv-on-the-air" element={<TvOnTheAirPage />} />
          <Route path="/tv-top-rated" element={<TvTopRated />} />

          <Route path="/people-popular" element={<PeoplePopularPage />} />
          <Route path="/serialTv" element={<SerialTvPage />} />
          <Route path="/search" element={<SearchPage />}>
            <Route path=":query" element={<SearchPage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
