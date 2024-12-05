import { FaAngleDoubleDown } from "react-icons/fa";
import "./Landing.css";

import KhaledAbumarasaImage from "assets/images/khaled.jpg";
import KhaledAbumarasaCV from "assets/data/Khaled_Abumarasa.pdf";
import Swal from "sweetalert2";
const Landing = () => {
  const handleDownloadCV = () => {
    Swal.fire({
      title: "Thank You!",
      text: "Thank you for downloading my CV. Feel free to reach out if you have any questions!",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/3314/3314459.png",
      imageAlt: "Flower Icon",
      imageHeight: 100,
      imageWidth: 100,

      confirmButtonText: "Close",
      timer: 10000,
    });
  };
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Welcome to My World</h1>
          <p>
            I am a web developer specializing in innovative MERN stack
            applications. I love building modern, scalable, and high-performance
            solutions that help businesses thrive. Let's create something
            amazing together!
          </p>
          <div className="buttons">
            <a href="mailto:khaled@example.com" className="btn contact-btn">
              Send Me a Message
            </a>
            <a
              href={KhaledAbumarasaCV}
              download
              className="btn download-btn"
              onClick={handleDownloadCV}
            >
              Download My CV
            </a>
          </div>
        </div>
        <div className="image">
          <img src={KhaledAbumarasaImage} alt="Landing" />
        </div>
      </div>
      <a href="#features" className="go-down">
        <FaAngleDoubleDown className="go-down-icon icon" />
      </a>
    </div>
  );
};

export default Landing;
