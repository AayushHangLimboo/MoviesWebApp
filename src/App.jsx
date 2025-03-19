import MovieCard from "./components/MovieCard";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App(){
 
  // return(
  //   <>
  //   <MovieCard movie={{title: "First Movie", release_date:"2023"}} />
  //   <MovieCard movie={{title: "Second Movie", release_date:"2024"}} />
  //   </>
  // );

  // const movieNumber = 3;// admin wagera wala kaam karte wakth zyada kaam agaya
  // return(
  //   <>
  //     {movieNumber==1 &&(
  //       <MovieCard movie={{title: "First Movie", release_date: "2023"}}/>
  //     )}
  //     <MovieCard movie={{title:"Second Movie", release_date:"2024"}}/>
  //   </>
  // );

  return(
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="favourites" element={<Favourites/>}/>
      </Routes>
    </main>
  );
}

export default App;
