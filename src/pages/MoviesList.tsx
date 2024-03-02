import {Movies} from "../components";
import {useEffect, useState} from "react";
import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState(null);
    const [totalpage, setTotalPage] = useState(null);
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data: {total_pages,page, results}}) => {
            setMovies(results);
            setPage(`${page}`);
            setTotalPage(total_pages)
        })
    }, [query]);
    return (
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery} totalpage={totalpage}/>
        </div>
    );
};

export {MoviesList};