import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MovieList from "./Commponents/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "SPIDER MAN",
      description:
        "Spider-Man ou l'homme araignée, est né en 1962, créé par Stan Lee et Steve Ditko. ... Peter est mordu par une araignée radioactive à la suite d'une expérience.",
      posterURL:
        "https://i0.wp.com/cinedweller.com/wp-content/uploads/2019/06/the-amazing-spider-man.jpg?ssl=1",
      rating: 3,
    },
    {
      title: "BATMAN",
      description:
        "Bruce Wayne, alias Batman, est un super-héros de fiction appartenant à l'univers de DC Comics. ... Malgré sa réputation de héros solitaire, il sait s'entourer d'alliés, comme Robin, son majordome Alfred Pennyworth ou encore le commissaire de police James Gordon.",
      posterURL:
        "https://img6.cdn.cinoche.com/images/c3fb81712f064356421af70523764e9d.jpg",
      rating: 4,
    },
    {
      title: "STAR WARS",
      description:
        "L'histoire de Star Wars, se déroule dans une galaxie qui est le théâtre d'affrontements entre les Chevaliers Jedi et les Seigneurs noirs des Sith, personnes sensibles à la Force, un champ énergétique mystérieux leur procurant des pouvoirs psychiques.",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/20/10/02/12/21/3764004.png",
      rating: 5,
    },
    {
      title: "TITANIC",
      description:
        "Le film est basé sur le récit du naufrage du RMS Titanic et met en vedette Leonardo DiCaprio et Kate Winslet",
      posterURL: "https://d3fa68hw0m2vcc.cloudfront.net/601/238712112.jpeg",
      rating: 2,
    },
  ]);
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
