import {Search, SearchForm} from "../components";
import {useState} from "react";

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState<{id:number, name:string}[]>([])
    console.log(searchMovie)
    return (
        <div>
            <SearchForm setSearchMovie={setSearchMovie}/>
            {searchMovie.map(({id}) => <Search id={id}/>)}
        </div>
    );
};

export {SearchMovie};