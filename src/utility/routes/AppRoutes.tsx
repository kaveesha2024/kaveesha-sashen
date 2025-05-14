import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/Home.tsx";
import Navigation from "../../components/navigation/Navigation.tsx";
import Skills from "../../pages/skills/Skills.tsx";
import Education from "../../pages/education/Education.tsx";
import Contact from "../../pages/contact/Contact.tsx";
import { Toaster } from "react-hot-toast";

const AppRoutes: React.FC = () => {

    return (
        <div className="w-full h-screen bg-gray-950">
          <Toaster />
            <Navigation/>
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route  path="/skills" element={<Skills />}/>
                <Route  path="/education" element={<Education />}/>
                <Route  path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;