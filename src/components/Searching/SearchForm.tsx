import {FC, useState} from "react";

import {ISetState} from "../../types";
import {useForm} from "react-hook-form";
import {SetURLSearchParams} from "react-router-dom";
import css from "./SearchForm.module.css"


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
        setFormSubmitted(true)
        reset()
    };
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div className={formSubmitted ? css.mainDivSubmitted : css.mainDiv}>
            <form className={css.formContainer} onSubmit={handleSubmit(giveMovie)}>
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Search Movie"
                    {...register('name')}
                />
                <button className={css.submitButton} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export { SearchForm };