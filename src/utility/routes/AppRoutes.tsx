import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../components/home/Home.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import Skills from "../../components/skills/Skills.tsx";
import Education from "../../components/education/Education.tsx";

const AppRoutes: React.FC = () => {

    return (
        <div className="w-full h-screen bg-gray-950">
            <Navigation/>
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route  path="/skills" element={<Skills />}/>
                <Route  path="/education" element={<Education />}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;