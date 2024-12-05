import { Link } from "react-router-dom";
import "./Footer.css";
// import FrontEnd1Image from "assets/images/front-end-1-footer.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="box">
          <h3>Khaled</h3>
          <p className="text">
            A software engineer who is passionate about building web
            applications and solving problems.
          </p>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <Link to="projects">Projects</Link>
            </li>
            <li>
              <Link to="projects/html&css">HTML & CSS</Link>
            </li>
            <li>
              <Link to="projects/javascript">JavaScript</Link>
            </li>
            <li>
              <Link to="projects/react">React</Link>
            </li>
            <li>
              <Link to="projects/mern">MERN</Link>
            </li>
          </ul>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/work-steps">Work Steps</Link>
            </li>
          </ul>
        </div>
        {/* <div className="box footer-gallery">
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
          <Link to="/projects/html&css/front-end-1">
            <img src={FrontEnd1Image} alt="front end 1" />
          </Link>
        </div> */}
      </div>
      <p className="copyright">Made With ❤️ By Khaled</p>
    </footer>
  );
};

export default Footer;
