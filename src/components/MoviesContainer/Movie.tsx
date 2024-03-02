import {FC} from "react";

// @ts-ignore
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";


interface IProps{
    movie:IMovie
}

const Movie:FC<IProps> = ({movie}) => {
    const {id, original_title, overview, popularity ,poster_path,vote_average,release_date,genre_ids} = movie;

    const navigate = useNavigate();

    return (
        <div>
            <img onClick={() => navigate(id.toString(), {state:{movie}})} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
            <p>{original_title}</p>
        </div>
    );
};

export {Movie};