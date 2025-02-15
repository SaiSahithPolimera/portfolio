import Home from "./pages/Home";
import { useRef, useState } from "react";
import Projects from "./pages/Projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";

const App = () => {
  const options = ["About", "Projects", "Experience", "Contact"]
  const [selection, setSelection] = useState(options[0]);
  const parallaxRef = useRef();
  const handleNavClick = (option) => {
    setSelection(option);
    const index = options.indexOf(option);
    if (parallaxRef.current) {
      if (window.innerWidth < 768) {
        if (index >= 1 && index < 2) {
          parallaxRef.current.scrollTo(1);
        }
        if (index == 0) {
          parallaxRef.current.scrollTo(0);
        }
        if (index >= 2) {
          parallaxRef.current.scrollTo(3);

        }
      }
      else {
        parallaxRef.current.scrollTo(index);
      }
    }
  };
  return (
    <section className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(105%_105%_at_50%_10%,#fff_40%,#63e_100%)] grid grid-rows-home justify-center items-center">
      <Navbar options={options} selection={selection} setSelection={handleNavClick} />
      <Parallax ref={parallaxRef} pages={window.innerWidth < 768 ? 4.5 : 4}>
        <ParallaxLayer offset={0} >
          <Home />
          <Projects />
          <Experience />
        </ParallaxLayer>
      </Parallax>
    </section>
  )
}

export default App;