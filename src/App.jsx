import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import TechStack from "./components/TechStack"

function App() {
  return (
    <div className="bg-zinc-950 ">
      <NavBar />
      <HeroSection />
      <TechStack/>
      <TechStack/>
      <Resume/>
      <Projects/>
    </div>
  )
}

export default App