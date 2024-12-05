import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Projects from "./Projects";
const Index = () => {
  const { pathname } = useLocation();
  const [titel, setTitle] = useState("All Projects");
  useEffect(() => {
    switch (pathname) {
      case "/projects":
        setTitle("All Projects");
        break;
      case "/projects/mern":
        setTitle("MERN");
        break;
      case "/projects/react":
        setTitle("React");
        break;
      case "/projects/javascript":
        setTitle("JavaScript");
        break;
      case "/projects/html&css":
        setTitle("HTML & CSS");
        break;
      default:
        setTitle("All Projects");
    }
  }, [pathname]);
  return (
    <div className="projects">
      <h2 className="main-title">{titel}</h2>
      <div className="container">
        <Routes>
          <Route path="/" element={<Projects title={titel} />} />
          <Route path="mern" element={<Projects title={titel} />} />
          <Route path="react" element={<Projects title={titel} />} />
          <Route path="javascript" element={<Projects title={titel} />} />
          <Route path="html&css" element={<Projects title={titel} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Index;
