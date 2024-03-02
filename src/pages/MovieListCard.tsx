import {MovieDetails} from "../components";
import {useAppLocation} from "../hooks";
import {IGenre, IMovie} from "../interfaces";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {genreService, movieService} from "../services";

const MovieListCard = () => {
    const {state} = useAppLocation<{movie:IMovie}>();
    const [movieDetails, setMovieDetails] = useState<IMovie>(null);
    const [genres, setGenres] = useState<IGenre>({genres: []})
    const {id} = useParams();

    useEffect(() => {
        genreService.getAll().then(({data})=> setGenres(data))
    }, [id,state]);

    useEffect(() => {
        if(state?.movie){
            setMovieDetails(state.movie)
        } else {
            movieService.getById(+id).then(({data})=> setMovieDetails(data))
        }
    }, [id, state]);
    return (
        <div>
            {movieDetails&&<MovieDetails movieDetails={movieDetails} genres={genres}/>}
        </div>
    );
};

export {MovieListCard};