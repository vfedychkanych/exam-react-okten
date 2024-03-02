import React, {FC, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";

import {searchService} from "../../services";
import {useNavigate} from "react-router-dom";
import {ISearch} from "../../interfaces";

interface IProps{
    setSearchMovie:React.Dispatch<React.SetStateAction<{id:number, name:string}[]>>;
}

const SearchForm:FC<IProps> = ({setSearchMovie}) => {
    const {register, reset, handleSubmit, formState:{errors,isValid}, setValue} = useForm({
        mode:'all'
    });

    const search: SubmitHandler<FieldValues> = async (formData) => {
        try {
            const { data } = await searchService.getRes(formData.movie);
            setSearchMovie(data.results);

        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={"Search Movie"} {...register('movie')}/>
            <button>Search</button>
        </form>
    );
};

export {SearchForm};