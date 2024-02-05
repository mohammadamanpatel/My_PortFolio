import styles from "./App.module.css";
import { About } from "./components/About/About";
import ContactForm, { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
