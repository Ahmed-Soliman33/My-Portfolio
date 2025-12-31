import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useScrollPosition } from "./hooks/useScrollPosition";

function App() {
  const showScrollBTN = useScrollPosition(300);
  return (
    <div id="up" className="container">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <Hero id="main-content" />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ opacity: showScrollBTN? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top" aria-label="Scroll to top"></button>
      </a>
    </div>
  );
}

export default App;
