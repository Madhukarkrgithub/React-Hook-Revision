
import React, { createContext, useState } from 'react';

export const createThem = createContext();

export const ThemProvider = ({children}) =>{

    const[them, setThem] = useState("light");

    const toggleThem = () =>{
        setThem(prevThem =>(prevThem === 'light' ? 'dark': 'light'))
    };
    return(
        <createThem.Provider value={{them,toggleThem}}>
            {children}
        </createThem.Provider>
    )
}