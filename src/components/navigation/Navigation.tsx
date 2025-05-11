import React, {useState} from 'react';
import {Link} from "react-router-dom";
//#AA00FF
const Navigation: React.FC = () => {
    const [selectedNavigationBtn, setSelectedNavigationBtm] = useState<string>("home");
    return (
        <div className="w-full fixed z-50 top-0  h-[70px] backdrop-blur-2xl  flex justify-between px-20 items-center">
            <Link to="/"><div className=" font-bold text-3xl cursor-pointer  text-white select-none">Mr. <span style={{
                // boxShadow: "0px 0px 50px 7px rgba(218,0,255,0.75)",
                textShadow: '0 0 10px #9b00ff, 0 0 20px #9b00ff'
            }} className="  text-[#AA00FF] ">Kaveesha</span></div></Link>
            <div className="flex gap-8">
                {selectedNavigationBtn !== "home" ? (
                    <Link onClick={()=>{setSelectedNavigationBtm("home")}} className="navigation-btn relative text-white font-semibold hover:text-[#AA00FF] hover:shadow-2xl hover:shadow-[#AA00FF] " to="/">Home</Link>
                ): <Link onClick={()=>{setSelectedNavigationBtm("home")}} className="selected-navigation-btn text- relative font-semibold" to="/">Home</Link>}
                {selectedNavigationBtn !== "education" ? (
                    <Link onClick={()=>{setSelectedNavigationBtm("education")}} className="navigation-btn relative text-white font-semibold hover:text-[#AA00FF] hover:shadow-2xl hover:shadow-[#AA00FF] " to="/education">Education</Link>
                ): <Link onClick={()=>{setSelectedNavigationBtm("education")}} className="selected-navigation-btn text- relative font-semibold" to="/education">Education</Link>}
                {selectedNavigationBtn !== "skills" ? (
                    <Link onClick={()=>{setSelectedNavigationBtm("skills")}} className="navigation-btn relative text-white font-semibold hover:text-[#AA00FF] hover:shadow-2xl hover:shadow-[#AA00FF] " to="/skills">Skills</Link>
                ): <Link onClick={()=>{setSelectedNavigationBtm("skills")}} className="selected-navigation-btn text- relative font-semibold" to="/skills">Skills</Link>}
                {selectedNavigationBtn !== "contact" ? (
                    <Link onClick={()=>{setSelectedNavigationBtm("contact")}} className="navigation-btn relative text-white font-semibold hover:text-[#AA00FF] hover:shadow-2xl hover:shadow-[#AA00FF] " to="/contact">Contact Me</Link>
                ): <Link onClick={()=>{setSelectedNavigationBtm("contact")}} className="selected-navigation-btn text- relative font-semibold" to="/contact">Contact Me</Link>}
            </div>
        </div>
    );
};
// <Link onClick={()=>{setSelectedNavigationBtm("Home")}} className="selected-navigation-btn text- relative font-semibold" to="/">Home</Link>
export default Navigation;