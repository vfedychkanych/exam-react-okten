import {IRes} from "../types";
import {ISearch} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService ={
    getRes: (query:string):IRes<ISearch> => apiService.get(urls.search(query))
}

export {
    searchService
}