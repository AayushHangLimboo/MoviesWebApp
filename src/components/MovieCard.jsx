function MovieCard({movie}){

    function handleFavouriteClick(){
        alert("Added to favourites");
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={handleFavouriteClick}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;

//named export -> can send multiple things ->export fnName
//default export -> single entity will be send -> end mei jaake [export default fnName]