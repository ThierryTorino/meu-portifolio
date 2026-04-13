import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import TechStack from "./components/TechStack"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-zinc-950 ">
      <NavBar />
      <HeroSection />
      <TechStack/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App