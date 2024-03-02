import React, {FC, useEffect} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {searchService} from "../../services";


interface FormData {
    movie: string;
}
interface IProps{
    query: URLSearchParams;
    setSearchMovie: (movies: any[]) => void;
    setPage: (page: number) => void;
    setTotalpage: (totalPage: number) => void;
}

const SearchForm:FC<IProps> = ({query, setSearchMovie,setPage,setTotalpage}) => {
    const {register, reset, handleSubmit, formState:{errors,isValid}, setValue} = useForm({
        mode:'all'
    });

    const takeMovies = async (param:string) => {
        await searchService.getRes(param, query.get('page')).then(({ data }) => {
            setSearchMovie(data.results);
            setPage(data.page);
            setTotalpage(data.total_pages);
        });
    }
    const search:SubmitHandler<Record<string, string>> = (data) => {
        takeMovies(data.movie)
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={"Search Movie"} {...register('movie')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};