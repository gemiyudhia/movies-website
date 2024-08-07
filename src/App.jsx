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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<FilmPage />} />
          <Route path="/movie-popular" element={<MoviePopularPage />} />
          <Route path="/tv-popular" element={<TvPopularPage />} />
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
