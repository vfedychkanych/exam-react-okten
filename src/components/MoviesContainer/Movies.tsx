import {FC} from "react";

import {IMovie} from "../../interfaces";
import {Movie} from "./Movie";
import {SetURLSearchParams} from "react-router-dom";

interface IProps{
    movies:IMovie[];
    page:string;
    totalpage:number;
    setQuery:SetURLSearchParams;
}

const Movies:FC<IProps> = ({movies,setQuery,page,totalpage }) => {
    const prev = () => {
        if(+page !== 1) {
            setQuery({page: (+page - 1).toString()})
        }
    };
    const next = () => {
        if(+page !== totalpage){
            setQuery({page:(+page+1).toString()})
        }
    };

    return (
        <div>
            {movies.map((movie) => <Movie key={movie.id} movie={movie}/>)}
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export {Movies};