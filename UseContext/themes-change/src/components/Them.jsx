import React, { useContext } from "react";
import { createThem } from "../context/Them";

const Them = () => {
    const { them, toggleThem } = useContext(createThem);

    return (
        <div>
            <button onClick={toggleThem}>
                {them === 'light' ? 'Switch to Dark theme' : 'Switch to Light Theme'}
            </button>
            <div style={{ background: them === 'light' ? '#fff' : '#333', color: them === 'light' ? '#333' : '#fff' }}>
                This is a themed component
            </div>
        </div>
    );
}

export default Them;
