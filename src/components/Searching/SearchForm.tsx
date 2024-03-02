import {FC} from "react";

import {ISetState} from "../../types";
import {useForm} from "react-hook-form";
import {SetURLSearchParams} from "react-router-dom";


interface IProps{
    setSearchParam:ISetState<string>;
    setQuery:SetURLSearchParams;
}

const SearchForm:FC<IProps> = ({setSearchParam, setQuery}) => {
    const {register, reset, handleSubmit} = useForm({
        mode: 'all'
    });


    const giveMovie = (data: any) => {
        setQuery({page: '1'})
        setSearchParam(data.name)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(giveMovie)}>
            <input type="text" placeholder={'Search Movie'} {...register('name')}/>
            <button> Search </button>
        </form>
    );
};

export {SearchForm};