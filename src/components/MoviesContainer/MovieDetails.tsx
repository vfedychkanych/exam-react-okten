import {FC} from "react";
import {IGenre, IMovie} from "../../interfaces";
import {NavLink} from "react-router-dom";


interface IProps{
    movieDetails:IMovie;
    genres:IGenre;
}

const MovieDetails:FC<IProps> = ({movieDetails,genres}) => {
    const { original_title, overview,poster_path,vote_average,release_date,genre_ids} = movieDetails;
    return (
        <div>
            <h2>{original_title}</h2>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <div>
                    <p>Popularity STARS: {vote_average}</p>
                    <p>Release Date: {release_date}</p>
                    <div>Genres:  <div>{
                        genres.genres.filter(g => genre_ids.includes(g.id))
                            .map(g => <NavLink to={`/genres/${g.id}`} key={g.id}>{g.name}   </NavLink>)
                    }</div>
                    </div>
                </div>
            </div>
            <h3>Overview</h3>
            <p>{overview}</p>
        </div>
    );
};

export {MovieDetails};