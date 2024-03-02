import {FC} from "react";
import {IGenre, IMovie} from "../../interfaces";


interface IProps{
    movieDetails:IMovie;
    genres:IGenre;
}

const MovieDetails:FC<IProps> = ({movieDetails,genres}) => {
    const {id, original_title, overview, popularity ,poster_path,vote_average,release_date,genre_ids} = movieDetails;

    console.log(genres)
    return (
        <div>
            <h2>{original_title}</h2>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <div>
                    <p>Popularity STARS: {vote_average}</p>
                    <p>Release Date: {release_date}</p>
                    <div>Genres:  </div>
                </div>
            </div>
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>
    );
};

export {MovieDetails};