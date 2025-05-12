import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ConnectWithMe from "./pages/ConnectWithMe";
import SplashCursor from "./components/SplashCursor";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

const App = () => {
  return (
    <section
      className="bg-black text-white"
    >
      <SplashCursor />
      <Navbar />
      <Home />
      <Projects/>
      <Experience/>
      <ConnectWithMe/>
      <Blog/>
    </section>
  )
}

export default App;