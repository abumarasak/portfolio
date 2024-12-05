import {
  FaComments,
  FaBuilding,
  FaCheckCircle,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Image from "assets/images/megamenu.png";
import { Link } from "react-router-dom";
const MegaMenu = ({ active }) => {
  return (
    <div className={`mega-menu  ${active && "active"}`}>
      <div className="image">
        <img src={Image} alt="Mega Menu" />
      </div>
      <ul className="links">
        <li>
          <Link to="/testimonials" className="hidden">
            <FaComments className="icon" /> Testimonials
          </Link>
        </li>
        <li>
          <Link to="/services">
            <FaBuilding className="icon" /> Services
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FaCheckCircle className="icon" />
            Skills
          </Link>
        </li>
        <li>
          <Link to="features">
            <RiSettings3Line className="icon" />
            Features
          </Link>
        </li>
        <li>
          <Link to="/work-steps">
            <BsCardChecklist className="icon" />
            Work Steps
          </Link>
        </li>
      </ul>
      <ul className="links">
        <li>
          <Link to="/projects">
            <HiOutlineClipboardList className="icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/projects/html&css">
            <FaHtml5 className="icon" /> HTML & CSS
          </Link>
        </li>
        <li>
          <Link to="/projects/javascript">
            <IoLogoJavascript className="icon" /> Javascript
          </Link>
        </li>
        <li>
          <Link to="/projects/react">
            <FaReact className="icon" /> React
          </Link>
        </li>
        <li>
          <Link to="/projects/mern">
            <SiMongodb className="icon" /> MERN
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MegaMenu;
