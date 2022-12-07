import React from 'react';
import './Searchbar.css';
import Button from "../Button/Button";

function Searchbar({ children,}) {
    return (
        <>
            <input
                type="text"
                className="nav-bar"
                placeholder="Typ hier je Pokemon"
            />
            {children}
            <Button>Search</Button>
        </>
    );
}

export default Searchbar;