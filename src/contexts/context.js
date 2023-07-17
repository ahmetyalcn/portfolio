import React, { createContext, useEffect, useState } from 'react';
import { data } from '../sections/data';
import axios from 'axios';

export const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
const [projects ,setProjects] = useState([])

    useEffect(()=>{
        axios
        .post("https://reqres.in/api/workintech", data)
        .then(res=>setProjects(res.data))
        .catch(err=>console.log(err))
    },[])



    const [lightMode, setLightMode] = useState(() => {
        if (localStorage.getItem("lightMode")) {
            return JSON.parse(localStorage.getItem("lightMode"));
        } else {
            return false
        }

    })

    const toggleChange = () => {
        setLightMode(!lightMode);
    };
    useEffect(() => {
        localStorage.setItem("lightMode", JSON.stringify(lightMode))
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ toggleChange, lightMode, projects }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider;