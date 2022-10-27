import React, { useEffect, useState } from 'react';
import './Darkmode.css';

const Darkmode = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const body = document.body
        const toggle = document.querySelector('.toggle-inner')

        // If dark mode is enabled - adds classes to update dark-mode styling.
        // Else, removes and styling is as normal.
        if (darkMode === true) {
            body.classList.add('dark-mode')
            toggle.classList.add('toggle-active')
        } else {
            body.classList.remove('dark-mode')
            toggle.classList.remove('toggle-active')
        }
    }, [darkMode])
    return (
        <div
            id="toggle"
            onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
            <div className="toggle-inner" />
        </div>
    );
};

export default Darkmode;