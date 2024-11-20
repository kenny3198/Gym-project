import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import Benefit from "./scenes/benefits"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import OurClasses from "@/scenes/ourClasses"
import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer"
type Props = {}


const App = (props: Props) => {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
 const [isTopOffPage, setIsTopOffPage] = useState<Boolean>(true)  
 useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOffPage(true)
      setSelectedPage(SelectedPage.Home)
    } 
    if (window.scrollY !== 0) setIsTopOffPage (false)
  }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
 }, [])
  
  return (
    <div className='app bg-gray-20'>
     <Navbar isTopOffPage={isTopOffPage} selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>

      <Home setSelectedPage={setSelectedPage}/>
      <Benefit setSelectedPage={setSelectedPage}/>
      <OurClasses  setSelectedPage={setSelectedPage}/>
      <ContactUs  setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App