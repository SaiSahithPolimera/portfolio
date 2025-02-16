import Home from "./pages/Home";
import { useRef, useState } from "react";
import Projects from "./pages/Projects";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import ConnectWithMe from "./pages/ConnectWithMe";

const App = () => {
  const options = ["About", "Projects", "Experience", "Connect with me"]
  const [selection, setSelection] = useState(options[0]);
  const parallaxRef = useRef();
  const handleNavClick = (option) => {
    setSelection(option);
    const index = options.indexOf(option);
    if (parallaxRef.current) {
      if (window.innerWidth < 768) {
        if(index > 1) {
          parallaxRef.current.scrollTo(index * 0.5);
        }
        else {
          parallaxRef.current.scrollTo(index);
        }
      }
      if (window.innerWidth < 680) {
        if(index >= 2) {
          parallaxRef.current.scrollTo(index + 1);
        }
        else {
          parallaxRef.current.scrollTo(index);
        }
      }
      else {
        parallaxRef.current.scrollTo(index);
      }
    }
  };
  return (
    <section className="absolute inset-0 -z-10 min-h-screen bg-white [background:radial-gradient(105%_105%_at_50%_10%,#fff_40%,#63e_100%)] grid grid-rows-home justify-center items-center">
      <Navbar options={options} selection={selection} setSelection={handleNavClick} />
      <Parallax ref={parallaxRef} pages={window.innerWidth < 680 ? 4.9 : window.innerWidth < 768 ? 5 : 4} className="w-full">
        <ParallaxLayer offset={0} >
          <Home />
          <Projects />
          <Experience />
          <ConnectWithMe/>
        </ParallaxLayer>
      </Parallax>
    </section>
  )
}

export default App;