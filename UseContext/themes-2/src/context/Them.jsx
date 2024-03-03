import { createContext, useContext, useEffect, useState } from "react";

const ThemContext = createContext();

export const useThem = () =>{
    return useContext(ThemContext);
};

export const ThemProvider = ({children}) =>{
    const[isDarkMode, setIsDarkMode] = useState(false);

    const toggleThem = () =>{
        setIsDarkMode((prevState) => !prevState);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() =>{
        document.documentElement.setAttribute("data-them" ,theme)
    },[isDarkMode]);

    return (
        <ThemContext.Provider value={{theme, toggleThem}}>
        {children}
        </ThemContext.Provider>
    );
};