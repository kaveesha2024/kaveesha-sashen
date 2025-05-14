import React, { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import 'aos/dist/aos.css';
import aos from "aos";
import {TypeAnimation} from "react-type-animation";

const Home: React.FC = () => {
  useEffect(() => {
    aos.init({duration: 1000});
  }, [])
    return (
        <div className="w-full bg-gray-950 h-screen pt-30 p-20 flex ">

          <div data-aos="fade-right" className="w-[50%] text-white h-full flex flex-col justify-center items-center ">
            <div className="pr-10">
              <h1 className="font-bold text-5xl">Hi, I'm <span className="text-[#AA00FF]">Kaveesha Sashen</span></h1>
              <div className="flex pt-5 justify-start items-end text-3xl font-bold  gap-5"><h2 className="">I'm a </h2><TypeAnimation
                sequence={[
                  'Frontend Developer', 1000,
                  '', 1000,
                  'Backend Developer', 1000,
                  '', 1000,
                  'Network Technician', 1000,
                  '', 1000,
                  'System Administrator', 1000,
                  '', 1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: '#AA00FF', display: 'inline-block' }}
                repeat={Infinity}
              /></div>
              <p className="mt-10 w-full text-lg text-justify select-none">
                I'm Kaveesha Sashen, a dedicated Full Stack Developer with a strong background in both web development and network/server administration. I specialize in building responsive, user-friendly applications using technologies like the MERN stack, Laravel, and Tailwind CSS, while also having hands-on experience with Ubuntu, pfSense, and Proxmox. My passion lies in creating efficient, scalable solutions that bridge the gap between development and infrastructure, and I'm always eager to learn and grow with each project I take on.


              </p>
            </div>
            <div className=" w-full mt-5 flex gap-10">
              <IoLogoWhatsapp className="text-4xl h-[40px] w-[40px] glow-hover  transition duration-300 text-[#AA00FF] hover:cursor-pointer hover:bg-[#AA00FF] hover:text-black bg-gray-950 rounded-full border-2  border-[#AA00FF] p-2  " />
              <FaGithub  className="text-4xl h-[40px] w-[40px] glow-hover  transition duration-300 text-[#AA00FF] hover:cursor-pointer hover:bg-[#AA00FF] hover:text-black bg-gray-950 rounded-full border-2  border-[#AA00FF] p-2  " />
              <RiLinkedinFill  className="glow-hover text-4xl h-[40px] w-[40px] transition duration-300 text-[#AA00FF] hover:cursor-pointer hover:bg-[#AA00FF] hover:text-black bg-gray-950 rounded-full border-2  border-[#AA00FF] p-2  " />
            </div>
            <div className=" w-full mt-10">
              <button className="py-3 px-7 mr-3 border-2 border-[#AA00FF] glow-hover transition duration-300 hover:bg-gray-950 bg-[#AA00FF] rounded-4xl">Hire Me</button>
              <button className="py-3 px-8 mr-3 border-2 border-[#AA00FF] glow-hover transition duration-300 hover:bg-[#AA00FF] rounded-4xl">Contact</button>
            </div>
          </div>

          <div data-aos="fade-left" className="flex justify-end items-center  w-[50%] h-full">
            {/*https://cqrpzyugjuvummsuiikf.supabase.co/storage/v1/object/public/images//492256123_636260142550841_8925867104268011929_n.jpg*/}
            <img className="w-[500px] min-w-[500px] h-[500px] min-h-[500px] rounded-full l-glow transition duration-300 glow"  src="https://cqrpzyugjuvummsuiikf.supabase.co/storage/v1/object/public/images//492256123_636260142550841_8925867104268011929_n.jpg" alt="imageNotFound" />
          </div>
        </div>
    );
};

export default Home;