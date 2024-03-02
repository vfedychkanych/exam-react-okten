import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>The Movie DataBase</h2>
            <NavLink to={'movies'}> Movies </NavLink>
            <NavLink to={'genres'}> Genres </NavLink>
            <NavLink to={'search'}> Search </NavLink>

        </div>
    );
};

export {Header};