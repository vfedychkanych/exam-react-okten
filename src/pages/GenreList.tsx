import {Genres} from "../components";
import {useEffect, useState} from "react";
import {genreService} from "../services";
import {IGenre} from "../interfaces";

const GenreList = () => {
    const [genre, setGenre] = useState<IGenre>({genres: []})

    useEffect(() => {
        genreService.getAll().then(({data})=> setGenre(data))
    }, []);
    return (
        <div>
            <Genres genre={genre}/>
        </div>
    );
};

export {GenreList};