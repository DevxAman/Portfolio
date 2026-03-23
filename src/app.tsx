import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Research,
  Tech,
  Timeline,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Works />
        <Research />
        <Tech />
        <Feedbacks />
        <Timeline />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
