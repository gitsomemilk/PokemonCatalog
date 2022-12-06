import './Button.css'
import React from 'react';

function Button({children, clickHandler,disabled }) {
    return (
        <button
            type="button"
            className="nav-button"
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;