import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovies} from "../interfaces";

const movieService ={
    getAll: (page='1'):IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getById: (id:number):IRes<IMovie> => apiService.get(urls.movies.getById(id))

}

export {
    movieService
}