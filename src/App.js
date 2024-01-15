import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./pages/header/Navbar";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Navbar webpagename="Sahayak" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
