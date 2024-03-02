import {FC, useEffect, useState} from "react";
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {Movie} from "../MoviesContainer/Movie";

interface IProps{
    id:number;
}

const Search: FC<IProps> = ({ id }) => {
    const [searchedMovie, setSearchedMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        movieService.getById(id).then(({ data }) => setSearchedMovie(data));
    }, [id]);

    if (!searchedMovie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Movie movie={searchedMovie} key={searchedMovie.id} />
        </div>
    );
};

export { Search };