import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

    // Effect to apply the dark mode class to the body
    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
