import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../interfaces";
import {searchService} from "../services";
import {Movies, SearchForm} from "../components";

const SearchPage = () => {
    const [searchParam, setSearchParam] = useState<string>(null);

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<string>(null);
    const [totalpage, setTotalPage] = useState<number>(null);
    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        searchService.getRes(searchParam, query.get('page')).then(({data: {total_pages,page, results}}) => {
            setMovies(results);
            setPage(`${page}`);
            setTotalPage(total_pages)
        })
    }, [query, searchParam]);
    return (
        <div>
            <SearchForm setSearchParam={setSearchParam} setQuery={setQuery}/>
            {searchParam&&<Movies movies={movies} page={page} setQuery={setQuery} totalpage={totalpage}/>}
        </div>
    );
};

export {SearchPage};