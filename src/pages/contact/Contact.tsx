import React, { type ChangeEvent, useEffect, useState } from "react";
import InputField from "./re-usable/InputField.tsx";
import aos from "aos";
import "aos/dist/aos.css";
import sendEmail from "../../utility/api/sendEmailApiCall.ts";
import type { IInputDetails } from "../../utility/types/contact";

const Contact: React.FC = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  const [inputDetails, setInputDetails] = useState<IInputDetails>({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setInputDetails({
      ...inputDetails,
      [name]: value,
    });
  };
  const handleSubmit = async (): Promise<void> => {
    await sendEmail(inputDetails, setInputDetails);
  };
  return (
    <div className="text-white pt-30 p-20">
      <div className=" w-hull">
        <h2
          data-aos="fade-up"
          className="font-bold text-center text-6xl font-mono mb-30"
        >
          Contact <span className="text-[#AA00FF]">Me</span>
        </h2>
        <div className="w-full h-full flex">
          <div
            data-aos="fade-right"
            className="  w-full h-full flex-col gap-6 flex justify-center items-center"
          >
            <InputField
              name={"fullName"}
              value={inputDetails.fullName}
              placeholder={"Full Name"}
              type={"text"}
              handleInput={handleInput}
            />
            <InputField
              name={"email"}
              value={inputDetails.email}
              placeholder={"Enter Your Email"}
              type={"email"}
              handleInput={handleInput}
            />
            <InputField
              value={inputDetails.phoneNumber}
              name={"phoneNumber"}
              placeholder={"Phone Number"}
              type={"text"}
              handleInput={handleInput}
            />
            <InputField
              name={"subject"}
              value={inputDetails.subject}
              placeholder={"Subject"}
              type={"text"}
              handleInput={handleInput}
            />
          </div>
          <div
            data-aos="fade-left"
            className="w-full h-full flex flex-col justify-center items-center gap-6 "
          >
            <textarea
              name="message"
              id="message"
              value={inputDetails.message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                const { name, value } = event.target;
                setInputDetails({
                  ...inputDetails,
                  [name]: value,
                });
              }}
              className="outline-none border-2 border-[#AA00FF] w-[80%] p-3 rounded-md font-semibold glow-hover transition duration-300"
              rows={10}
              placeholder="Your Message"
            ></textarea>
            <button onClick={handleSubmit} className="border-2 border-[#AA00FF]   rounded-4xl glow-hover transition duration-300 py-2 px-3 font-serif">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
