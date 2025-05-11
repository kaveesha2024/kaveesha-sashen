import React, { useEffect } from "react";
import aos from "aos";
import 'aos/dist/aos.css';

const Education: React.FC = () => {
  useEffect(() => {
    aos.init({
      duration: 1000, // animation duration (in ms)
      once: false      // whether animation should happen only once
    });
  }, []);
  return (
    <div className="pt-30 p-20 text-white w-full h-[2500px]   flex justify-center ">
      <div className=" w-full h-full flex flex-col justify-start items-center">
        <h1 className="text-6xl font-bold mb-10 font-mono">Education</h1>
        <div className="w-full h-[100%] flex gap-2">
          <div className="w-[50%] h-full relative ">

            <div data-aos="fade-up">
              <p className="absolute top-0 right-5 font-serif">2017-2019</p>
              <div className=" w-[400px] l-glow text-end p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[40px] right-5 bg-gray-950">
                <h4 className="text-lg font-semibold mb-2">Primary Education</h4>
                <p>Olcotte College Galle</p>
                <p>Passed G.C.E (Ordinary Level) Examination with</p>
                <p>1Bs, 4Cs, 4Ss</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="absolute top-[390px] font-serif right-5">Year 2023</p>
              <div className=" w-[400px] l-glow text-end p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute right-5 top-[430px] bg-gray-950">
                <h4 className="text-lg font-semibold mb-2">Computer Network Technician NVQ Lv-3</h4>
                <p className="text-justify">In 2024, this certification focuses on the foundational aspects of network
                  technology, including installation, configuration, and basic troubleshooting. It
                  prepares students for entry-level network technician roles.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="absolute top-[950px] font-serif right-5">Year 2023</p>
              <div className=" w-[400px] l-glow text-end p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[990px] right-5 bg-gray-950">
                <h4 className="text-lg font-semibold mb-2">English Course</h4>
                <p className="text-justify">
                  Successfully completed an English language certification course at Bizes
                  Educational Center, achieving an A Pass, demonstrating strong proficiency in
                  English communication skills.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="absolute top-[1590px] right-5 font-serif">Year 2025</p>
              <div className=" w-[400px] l-glow text-end p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[1630px] right-5 bg-gray-950">
                <h4 className="text-lg font-semibold mb-2">Full-Stack Developer Program</h4>
                <p className="text-justify">Currently enrolled in a Full Stack Developer program designed to build expertise
                  in both frontend and backend development. Proficient in frontend technologies
                  such as HTML, CSS, and JavaScript, with hands-on experience in modern
                  frameworks and tools like Node.js, React, and Vite to create dynamic and
                  responsive user interfaces. Developing strong backend skills using PHP, Laravel,
                  and MySQL to design robust, scalable, and secure server-side applications.
                  Actively working on projects to apply these skills and build a solid foundation in
                  full stack development.</p>
              </div>
            </div>
            </div>
          <div className="w-[50%]  h-full relative ">

            <div data-aos="fade-up">
              <p className="absolute top-[210px] left-5 font-serif">
                2020-2022 (2023)
              </p>
              <div className="w-[400px] l-glow text-start p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[250px] left-5 bg-gray-950">
                <h4 className="text-lg mb-2 font-semibold">
                  Secondary Education
                </h4>
                <p>Olcotte College Galle</p>
                <p>G.C.E (Advance Level) Examination</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="font-serif absolute top-[660px] left-5">Year 2024</p>
              <div className="w-[400px] l-glow text-start p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[700px] left-5 bg-gray-950">
                <h4 className="text-lg mb-2 font-semibold">Computer Network Technician NVQ Lv-4</h4>
                <p className="text-justify">
                  completed in 2024, this certification provides in-depth knowledge of
                  networking concepts, including network design, implementation,
                  troubleshooting, and maintenance. It qualifies individuals to handle complex
                  network systems efficiently.
                </p>
              </div>
            </div>

            <div data-aos="fade-up">
              <p className="font-serif absolute top-[1210px] left-5">2024 (Self Studied)</p>
              <div className="w-[400px] l-glow text-start p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[1250px] left-5 bg-gray-950">
                <h4 className="text-lg mb-2 font-semibold">Server management and Administration</h4>
                <p className="text-justify">
                  Self-studied Ubuntu and CentOS server management and administration,
                  gaining expertise in configuring and maintaining essential services such as
                  DHCP, Proxy, DNS, FTP, Samba, SSH, Web, Printer, and more. Proficient in
                  automating tasks using Ansible and scheduling routine operations with Cron
                  jobs, ensuring efficiency and reliability in system management.
                </p>
              </div>

              <div data-aos="fade-up">
                <p className="absolute top-[2040px] left-5 font-serif">Year 2025</p>
                <div className="w-[400px] l-glow text-start p-4 glow rounded-2xl hover:scale-110 transition duration-300 absolute top-[2080px] left-5 bg-gray-950">
                  <h4 className="text-lg mb-2 font-semibold">ICT Diploma</h4>
                  <p className="text-justify">
                    Currently enrolled in the ICT Diploma program, which was designed to prepare for our higher education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
