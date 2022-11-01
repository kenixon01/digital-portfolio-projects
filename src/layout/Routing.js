import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home'
import Project from '../routes/Project'
import Err404 from '../routes/Err404'
import Query from "../routes/Query";

const Routing = () => {
    return(
        <Routes>
            <Route exact path='/digital-portfolio-projects' element={<Home/>}/>
            <Route exact path='/digital-portfolio-projects/project' element={<Project />}/>
            <Route exact path='/digital-portfolio-projects/project/:name' element={<Query />}/>
            <Route exact path='/digital-portfolio-projects/404'  element={<Err404 />}/>
            <Route exact path='*'  element={<Err404 />}/>
        </Routes>
    )
}
export default Routing