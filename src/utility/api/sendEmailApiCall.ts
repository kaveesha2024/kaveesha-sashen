import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import type { IInputDetails } from "../types/contact";

const sendEmail = async (inputDetails: IInputDetails, setInputDetails: (value: (((prevState: IInputDetails) => IInputDetails) | IInputDetails)) => void) => {
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
        message: inputDetails.message
      },
      "elF_g9pOU4aRlz1HA"
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
          message: ""
        }
      );
    } else {
      toast.error("Failed to Send Message. Please try again !");
    }
  } catch (err) {
    console.log(err);
  }
}
export default sendEmail;