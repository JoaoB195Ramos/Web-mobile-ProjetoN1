import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Forum from "./components/Forum";
import HealthMaternity from "./components/HealthMaternity";
import SocialLinks from "./components/SocialLinks";
import FAQ from "./components/FAQ";
import Apoio from "./components/Apoio";
import Login from "./components/Login";
import Menu from "./components/menu";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Forum />
      <HealthMaternity />

      <section id="contact" className="contact">
        <h2>Contato</h2>
        <Login />
      </section>
      <FAQ />
      <Apoio instagramUsername="MackHealth" />
      <SocialLinks />
      <Menu />
    </>
  );
}

export default App;
