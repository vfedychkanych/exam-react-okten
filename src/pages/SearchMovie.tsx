import {Search, SearchForm} from "../components";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState<{id:number, name:string}[]>([])
        const [page, setPage] = useState<number>(null)
    const [totalpage, setTotalpage] = useState<number>(null)
    const [query, setQuery] = useSearchParams({page:'1'});


    return (
        <div>
            <SearchForm setSearchMovie={setSearchMovie} setPage={setPage} setTotalpage={setTotalpage} query={query}/>
            <Search ids={searchMovie.map((search) => search.id)} page={page} totalpage={totalpage} setQuery={setQuery}/>
        </div>
    );
};

export {SearchMovie};