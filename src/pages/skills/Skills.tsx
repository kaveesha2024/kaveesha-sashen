import React from "react";
import SkillCard from "./SkillCard.tsx";
import {
  CssIcon,
  Html,
  Javascript,
  Nodejs,
  Typescript,
  ReactIcon,
  Redux,
  Tailwind,
  Mongodb,
  Mysql,
  Phpstorm,
  Vscode,
  Php,
  Laravel,
  Postman,
  Ubuntu,
  Centos,
  Express,
  PhpUnit,
  Github,
  Git,
  Emailjs,
  Supabase,
} from "../../components/icons/Icon.tsx";

const Skills: React.FC = () => {
  return (
    <div className="text-white pt-30 p-20 flex justify-center items-center gap-10 flex-wrap ">
      <SkillCard Icon={Html} name="HTML" />
      <SkillCard Icon={CssIcon} name="CSS" />
      <SkillCard Icon={Javascript} name="Javascript" />
      <SkillCard Icon={Typescript} name="Typescript" />
      <SkillCard Icon={Nodejs} name="Node JS" />
      <SkillCard Icon={Express} name="Express JS" />
      <SkillCard Icon={ReactIcon} name="React" />
      <SkillCard Icon={Redux} name="Redux" />
      <SkillCard Icon={Emailjs} name="Email JS" />
      <SkillCard Icon={Tailwind} name="Tailwind" />
      <SkillCard Icon={Mongodb} name="Mongo DB" />
      <SkillCard Icon={Supabase} name="Supabase" />
      <SkillCard Icon={Mysql} name="My SQL" />
      <SkillCard Icon={Php} name="PHP" />
      <SkillCard Icon={Laravel} name="Laravel" />
      <SkillCard Icon={PhpUnit} name="PHP Unit" />
      <SkillCard Icon={Phpstorm} name="PHP Storm" />
      <SkillCard Icon={Vscode} name="Vscode" />
      <SkillCard Icon={Github} name="GitHub" />
      <SkillCard Icon={Git} name="GIT" />
      <SkillCard Icon={Postman} name="Postman" />
      <SkillCard Icon={Ubuntu} name="Ubuntu" />
      <SkillCard Icon={Centos} name="Centos" />
    </div>
  );
};

export default Skills;
