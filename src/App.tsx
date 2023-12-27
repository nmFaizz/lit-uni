import LitNews from "./components/LitNews/LitNews";
import LitLocation from "./components/LitSays/LitSays";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import HeroSection from "./components/HeroSection/HeroSection";
import LitStat from "./components/LitStat/LitStat";
import LitAwards from "./components/LitAwards/LitAwards";
import LitFooter from "./components/LitFooter/LitFooter";


function App() {
  return (
    <div className='bg-stone-900'>
      <NavBar />

      <HeroSection />
  
      <LitStat />

      <LitNews />

      <LitAwards />

      <LitLocation />

      <LitFooter />

      <SideBar />
    </div>
  )
}

export default App
