import React from 'react';
import './Ball.css';

function BallButton ({
    onChange,
    onClick,
    numberBall
}) {
    return (
        <>
            <button className="ball"  onClick={onClick} onChange={onChange}>
                {numberBall}
            </button>
        </>
    )
}

export default BallButton;