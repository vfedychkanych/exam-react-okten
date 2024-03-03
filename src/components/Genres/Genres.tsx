import React, { FC } from "react";
import { IGenre } from "../../interfaces";
import { NavLink } from "react-router-dom";
import css from "./Genres.module.css";

interface IProps {
    genre: IGenre;
}

const Genres: FC<IProps> = ({ genre }) => {
    const { genres } = genre;

    return (
        <div className={css.main}>
            <div className={css.genresContainer}>
            {genres.map((genre) => (
                <div key={genre.id} className={css.badge}>
                    <NavLink className={css.genreLink} to={`${genre.id}`}>
                        {genre.name}
                    </NavLink>
                </div>
            ))}
            </div>
        </div>
    );
};

export { Genres };
