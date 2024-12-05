import "./WorkSteps.css";
import { FaSearch, FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import Image from "assets/images/work-steps.png";
const WorkSteps = () => {
  return (
    <div className="work-steps" id="work-steps">
      <h2 className="main-title">How It Works?</h2>
      <div className="container">
        <img src={Image} alt="Work steps illustration" className="image" />
        <div className="info">
          <div className="box">
            <FaSearch size={50} className="icon" />
            <div className="text">
              <h3>Business Analysis</h3>
              <p>
                Our process begins with an in-depth analysis of your business
                needs and objectives. We research your target audience, market
                trends, and competitors to develop a clear roadmap for success.
              </p>
            </div>
          </div>
          <div className="box">
            <FaPencilRuler size={50} className="icon" />
            <div className="text">
              <h3>UI/UX Design</h3>
              <p>
                Together, we will design an intuitive and visually appealing
                user interface that ensures a seamless experience for the users,
                aligning with the project's goals and client expectations.
              </p>
            </div>
          </div>
          <div className="box">
            <FaLaptopCode size={50} className="icon" />
            <div className="text">
              <h3>Development</h3>
              <p>
                I will bring your project to life using the latest technologies.
                My focus is on writing clean code, ensuring excellent
                performance, and delivering a user-friendly experience that
                meets and exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSteps;
