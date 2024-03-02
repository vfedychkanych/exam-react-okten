import {FC, useEffect, useState} from "react";

import {Movies} from "../MoviesContainer/Movies";
import {SetURLSearchParams, useSearchParams} from "react-router-dom";
import {IMovie} from "../../interfaces";
import {movieService} from "../../services";

interface IProps{
    ids:number[];
    totalpage:number;
    page:number;
    setQuery:SetURLSearchParams;
}

const Search: FC<IProps> = ({ ids ,totalpage,page, setQuery}) => {
    const [moviesForSearch, setMoviesForSearch] = useState<IMovie[]>([]);
    useEffect(() => {
        Promise.all(ids.map((id) => movieService.getById(id)))
            .then((responses) => {
                const moviesData = responses.map(({ data }) => data);
                setMoviesForSearch(moviesData);
            })
            .catch((error) => {

                console.error('Помилка отримання даних фільмів:', error);
            });
        }, [ids]);

    return (
        <div>
            <Movies movies={moviesForSearch} page={`${page}`} setQuery={setQuery} totalpage={totalpage}/>
        </div>
    );
};

export { Search };