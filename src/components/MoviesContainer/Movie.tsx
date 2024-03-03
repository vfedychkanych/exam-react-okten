import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from 'react-rating-stars-component';

import { IMovie } from "../../interfaces";
import css from "./Movie.module.css";
import StarRatings from "react-star-ratings";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({ movie }) => {
    const { id, original_title, poster_path,vote_average } = movie;
    const navigate = useNavigate();
    return (
        <div className={css.movieContainer} onClick={() => navigate(`/movies/${id.toString()}`, { state: { movie } })}>
            <img
                src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://media.istockphoto.com/id/1028603300/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B8%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Uy8GsJXtImA8s-tNx_cL2YORvV2AQj3T1Td-yiVkl_o='}
                alt=""
            />
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
            <p className={css.bebas}>{original_title}</p>
        </div>
    );
};

export { Movie };
