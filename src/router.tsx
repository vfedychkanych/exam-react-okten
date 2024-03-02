import {createBrowserRouter, NavLink} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MoviesList,SearchMovie} from "./pages";
import {MovieListCard} from "./pages/MovieListCard";
import {GenreList} from "./pages/GenreList";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children:[
            {
                index: true, element: <NavLink to={'movies'}/>
            },
            {
                path: 'movies', element: <MoviesList/>
            },
            {
                path: 'movies/:id', element:<MovieListCard/>
            },
            {
                path: 'genres', element: <GenreList/>
            },
            {
                path: 'search', element: <SearchMovie/>
            }
        ]
    }
]);

export {
    router
}