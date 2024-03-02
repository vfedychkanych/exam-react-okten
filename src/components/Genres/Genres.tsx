import {FC} from "react";
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";

interface IProps{
    genre:IGenre
}

const Genres:FC<IProps> = ({genre}) => {
    const {genres} = genre;
    return (
        <div>
            {genres.map((genre) => <NavLink key={genre.id} to={`${genre.id}`}>{genre.name}</NavLink>)}
        </div>
    );
};

export {Genres};