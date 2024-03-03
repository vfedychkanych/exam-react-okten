import React, { FC } from "react";

import { IGenre, IMovie } from "../../interfaces";
import { NavLink } from "react-router-dom";
import css from "./MovieDetails.module.css";
import StarRatings from "react-star-ratings";

interface IProps {
    movieDetails: IMovie;
    genres: IGenre;
}

const MovieDetails: FC<IProps> = ({ movieDetails, genres }) => {
    const { original_title, overview, poster_path, vote_average, release_date, genre_ids, popularity } = movieDetails;

    return (
        <div className={css.movieDetails}>
            <h1>{original_title}</h1>
            <div className={css.detailsContainer}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://media.istockphoto.com/id/1028603300/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B8%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Uy8GsJXtImA8s-tNx_cL2YORvV2AQj3T1Td-yiVkl_o='}
                     alt="" />
                <div className={css.movieInfo}>
                    <div>
                        <StarRatings
                            rating={vote_average}
                            starRatedColor="#930101"
                            starHoverColor="#930101"
                            numberOfStars={10}
                            starDimension="20px"
                            starSpacing="2px"
                        />
                    </div>
                    <h5>Release Date: {release_date}</h5>
                    <h5>Number of views: {popularity}</h5>
                    <div className={css.genres}>
                        <div className={css.badges}>
                            {genres.genres
                                .filter((g) => genre_ids.includes(g.id))
                                .map((g) => (
                                    <NavLink to={`/genres/${g.id}`} key={g.id} className={css.genreBadge}>
                                        {g.name}
                                    </NavLink>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <h3>Overview</h3>
            <div className={css.overview}>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export { MovieDetails };
