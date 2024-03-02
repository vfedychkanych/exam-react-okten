import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {Movies} from "../components";

const MoviesByGenrePage = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<string>(null);
    const [totalpage, setTotalPage] = useState<number>(null);
    const [query, setQuery] = useSearchParams({page:'1'});


    const {id_genre} = useParams();
    useEffect(() => {
        movieService.getBeGenre(+id_genre, query.get('page')).then(({data: {total_pages,page, results}}) => {
            setMovies(results);
            setPage(`${page}`);
            setTotalPage(total_pages)
        })
    }, [id_genre, query]);

    return (
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery} totalpage={totalpage}/>
        </div>
    );
};

export {MoviesByGenrePage};