import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
export const Context = React.createContext()

const ContextProvider = (props) => {
   
    const [windowSize, setWindowSize] = useState(undefined);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const serverUrl = 'https://einav-web-course-server.herokuapp.com/'
    let location = useLocation();


    const dbReq = async(cb, method, query, body, headers)=> {
        fetch(serverUrl + query, { method, headers, body})
        .then((response) => response.json())
        .then((data) => cb(data));
    }

    const useWindowSize = () => {
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth);
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize
    }
    useWindowSize()

    return (
        <Context.Provider value={{
            windowSize, dbReq,
            isMenuOpen, setIsMenuOpen,
            location
        }}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider