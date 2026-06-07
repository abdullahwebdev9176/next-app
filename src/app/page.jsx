import Image from "next/image";
import Header from "./components/layout-components/Header";
import Footer from "./components/layout-components/Footer";
import MovieCard from "./components/MovieCard";
import CounterApp from "./components/CounterApp";
import LoginStatus from "./components/LoginStatus";
import EventHandlers from "./components/EventHandlers";
import LoginStatusNew from "./components/LoginStatusNew";
import RenderingList from "./components/RenderingList";
import ControledInputs from "./components/ControledInputs";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";

export default function Home() {

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 2,
      title: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
    },
  ];

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 20vh)" }} className="flex items-center justify-center">
        <Search />
        {/* <Wrapper /> */}
        {/* <Form /> */}
        {/* <ControledInputs /> */}
        {/* <RenderingList /> */}
        {/* <LoginStatusNew /> */}
        {/* <EventHandlers /> */}
        {/* <CounterApp /> */}
        {/* <LoginStatus id={movies[0].id} title={movies[0].title} year={movies[0].year} rating={movies[0].rating} /> */}
        
        {/* <MovieCard id={movies[0].id} title={movies[0].title} year={movies[0].year} rating={movies[0].rating} /> */}

        {/* <MovieCard movies={movies} /> */}
      </main>
      <Footer />
    </>
  );
}
