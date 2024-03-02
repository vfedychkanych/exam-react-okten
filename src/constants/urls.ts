const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const search = '/search/keyword';

const urls ={
    movies:{
        base: movies,
        getById: (id:number) => `${movies}/${id}`
    },
    genres:{
        base: genres,
        getById: (id:number) => `${genres}/${id}`
    },
    search: (query:string) => `${search}?query=${query}`
}

export {
    baseURL,
    urls
}