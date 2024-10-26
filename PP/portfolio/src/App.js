import Navbar from "./Sections/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";
import Portfolio from "./Sections/Portfolio/Portfolio";
import Contact from "./Sections/Contacts/Contact";
import Footer from "./Sections/Footer/Footer";
import Modal from "./context/theme/Modal";
import { useState } from "react";
const App = ()  => {
const [openModal,setOpenModal] = useState(false);
const [primaryColor,setPrimaryColor]=useState('hsl(270,89%,41%)')
const [backgroundColor,setBackgroundColor]=useState('hsl(270,5%,94%)')

 const openedModal = () => setOpenModal(!openModal)
  const applyTheme = (primary,background) => {
    setPrimaryColor(primary);
    setBackgroundColor(background)
    document.documentElement.style.setProperty("--color-primary",primary)
    document.documentElement.style.setProperty("--color-white", background);
    setOpenModal(openModal)
  }
  return (
    <main className="App" style={{ backgroundColor: backgroundColor,    color: backgroundColor === '#001' ? '#fff' : '#000'}}>
     <Navbar openedModal={openedModal}/>
     <Header  backgroundColor={backgroundColor}/>
     <Modal  applyTheme={applyTheme} openModal={openModal} setOpenModal={setOpenModal}/>
     <About/>
     <Services />
     <Portfolio primaryColor={primaryColor}/>
     <Contact/>
     <Footer/>
    </main>
  );
}

export default App;
