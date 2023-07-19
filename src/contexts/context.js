import React, { createContext, useEffect, useState } from 'react';
import { data } from '../sections/data';
import axios from 'axios';

export const ThemeContext = createContext();

const ContextProvider = ({ children }) => {
const [projects ,setProjects] = useState([])
const [skills ,setSkills] = useState([])

    useEffect(()=>{
        axios
        .post("https://reqres.in/api/workintech", data)
        .then(res=>{
            setProjects(res.data.projects)
            setSkills(res.data.skills)
        })
        .catch(err=>console.log(err))
    },[])



    const [lightMode, setLightMode] = useState(() => {
        if (localStorage.getItem("lightMode")) {
            return JSON.parse(localStorage.getItem("lightMode"));
        } else {
            return true
        }

    })

    const toggleChange = () => {
        setLightMode(!lightMode);
    };
    useEffect(() => {
        localStorage.setItem("lightMode", JSON.stringify(lightMode))
    }, [lightMode]);

    return (
        <ThemeContext.Provider value={{ toggleChange, lightMode, projects,skills }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextProvider;