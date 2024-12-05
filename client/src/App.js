import React, { lazy, Suspense } from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import "assets/css/Global.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "components/loading/Loading";
const Home = lazy(() => import("pages/home/Home"));
const Features = lazy(() => import("pages/features/Features"));
const WorkSteps = lazy(() => import("pages/workSteps/WorkSteps"));
const InteractiveTerminal = lazy(() =>
  import("pages/interactiveTerminal/InteractiveTerminal")
);
const Projects = lazy(() => import("pages/projects/index"));
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/work-steps" element={<WorkSteps />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="*" element={<InteractiveTerminal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
