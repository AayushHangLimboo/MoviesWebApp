import { useState,useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies,getPopularMovies } from "../services/api";
import "../CSS/Home.css";
import Navbar from "../components/Navbar";

function Home(){
    
    const[search,setSearch]=useState("");
    
    const [movies,setMovies]=useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
          try {
            const popMovies = await getPopularMovies();
            setMovies(popMovies);
            console.log(popMovies);
          } catch (err) {
            console.log(err);
            setError(err);
          } finally {
            setLoading(false);
          }
        };
        loadPopularMovies();
      }, []);

    //ek concept of react that when changed triggers rerendering of components:useState
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // alert(`Movie: ${search}`);
        if(!search.trim())return;
        if(loading)return;

        setLoading(true);
        try{
            const searchRes=await searchMovies(search);
            setMovies(searchRes);
            setError(null);
        }
        catch(err){
            setError(err);
            console.log(err);
        }
        finally{
            setLoading(false);
        }

        setSearch("");
    };
   
    return(
        <div className="home">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input" 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error">{error}</div>}

            {loading?(
                <div ClassName="loading">Loading...</div>
            ):(
            <div className="movies-grid">
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            )}
        </div>
    );
}

export default Home;