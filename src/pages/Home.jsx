import Hero from "../components/Hero"
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="bg-gradient-to-br from-stone-400 via-current to-slate-700 min-h-screen grid grid-rows-home justify-center items-center">
            <Navbar />
            <Hero />
        </section>
    )
}

export default Home;