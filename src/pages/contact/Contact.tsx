import React, { type ChangeEvent, useEffect, useState } from "react";
import InputField from "./re-usable/InputField.tsx";
import aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact: React.FC = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  const [inputDetails, setInputDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  console.log(inputDetails);
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputDetails({
      ...inputDetails,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    try {
      const apiToast = toast.loading("Sending Message...");
      const response = await emailjs.send(
        "service_3zgefe2",
        "template_j0zm26u",
        {
          fullName: inputDetails.fullName,
          email: inputDetails.email,
          phoneNumber: inputDetails.phoneNumber,
          subject: inputDetails.subject,
          message: inputDetails.message,
        },
        "elF_g9pOU4aRlz1HA",
      );
      toast.dismiss(apiToast);
      if (response.status === 200) {
        toast.success("Message Sent Successfully");
        setInputDetails(
          {
            fullName: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          },
        )
      }else {
        toast.error("Message Failed to Send");
      }
    } catch (err) {
      console.log(err);
    }
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
