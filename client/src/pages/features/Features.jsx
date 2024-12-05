import "./Features.css";
import FeatureImage1 from "assets/images/features-01.jpg";
import FeatureImage2 from "assets/images/features-02.jpg";
import FeatureImage3 from "assets/images/features-03.jpg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Features = () => {
  const location = useLocation();
  const [page] = useState(location.pathname === "/features" ? true : false);
  return (
    <div className={`features ${page && "page"}`} id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        <div className="box quality">
          <div className="img-holder">
            <img src={FeatureImage1} alt="High quality feature" />
          </div>
          <h2>Quality</h2>
          <p>
            I ensure high-quality results by focusing on attention to detail,
            maintaining standards, and delivering solutions that meet and exceed
            client expectations.
          </p>
          <Link to="/contact?subject=Quality">Know more</Link>
        </div>
        <div className="box time">
          <div className="img-holder">
            <img src={FeatureImage2} alt="Efficient time management" />
          </div>
          <h2>Time</h2>
          <p>
            Time management is a priority for me. I deliver projects promptly
            while ensuring every detail is handled with care and precision.
          </p>
          <Link to="/contact?subject=Time">Know more</Link>
        </div>
        <div className="box passion">
          <div className="img-holder">
            <img src={FeatureImage3} alt="Passionate about work" />
          </div>
          <h2>Passion</h2>
          <p>
            Passion drives my work. I am dedicated to creating innovative and
            impactful solutions that truly resonate with your needs.
          </p>
          <Link to="/contact?subject=Passion">Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
