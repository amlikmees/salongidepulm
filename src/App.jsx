import Hero from "./components/Hero.jsx";
import RsvpForm from "./components/RsvpForm.jsx";
import WeddingInfo from "./components/WeddingInfo.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
      <>
        <NavBar />
        <Hero />
        <WeddingInfo />
    {/* <RsvpForm /> */}
        <Footer />
      </>
  );
}

export default App;