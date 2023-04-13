import {useEffect, useState} from "react";

export default function Poster() {

    const [moviesList, setMoviesList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1');
            const data = await response.json();
            setMoviesList(data.results);
            setIsLoading(false);
        };

        request()        
    },[])

    // console.log(moviesList);
    if (isLoading) {
        return (
            <h1 className="text-white text-center">Loading...</h1>
        )
    } else {
        return (

        <img src={'https://image.tmdb.org/t/p/original' + moviesList[0].poster_path}></img>
    )
    }
}