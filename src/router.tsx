import {createBrowserRouter, NavLink} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesList, MovieListCard, GenreList} from "./pages";
import {SearchPage} from "./pages/SearchPage";

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
                path: 'search', element: <SearchPage/>
            }
        ]
    }
]);

export {
    router
}