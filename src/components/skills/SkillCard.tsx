import React, { useEffect } from "react";
import aos from "aos";
import 'aos/dist/aos.css';

interface ISkillCard {
  name: string;
  Icon: React.FC
}
const SkillCard: React.FC <ISkillCard> = ({ name, Icon }) => {
  useEffect(() => {
    aos.init({
      duration: 1000, // animation duration (in ms)
      once: false      // whether animation should happen only once
    });
  }, []);
  return (
    <div data-aos="fade-up" className="w-[280px] hover:border-[#AA00FF] l-glow transition duration-300 h-[310px] border-2 border-gray-400 rounded-4xl flex justify-center items-center flex-col gap-5">
      <Icon />
      <span className="font-bold text-lg">{name}</span>
    </div>
  );
};

export default SkillCard;