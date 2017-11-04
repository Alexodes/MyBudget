import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>The Budget</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">CreatePage</NavLink>
{/*
        <NavLink to="/edit" activeClassName="is-active">EditPage</NavLink>
*/}
        <NavLink to="/help" activeClassName="is-active">HelpPage</NavLink>
    </header>
);

export default Header;