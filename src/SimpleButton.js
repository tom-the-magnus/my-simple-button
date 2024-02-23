import React from 'react';
import { useNavigate } from 'react-router-dom';

function SimpleButton({page}) {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(page);
    };

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default SimpleButton;