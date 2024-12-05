import Landing from "components/landing/Landing";
import "./Home.css";
import WorkSteps from "pages/workSteps/WorkSteps";
import Features from "pages/features/Features";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Features />
      <WorkSteps />
    </div>
  );
};

export default Home;
